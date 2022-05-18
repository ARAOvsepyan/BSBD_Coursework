const {Sale, Tour, User, Wallet, Reduction} = require('../models/models')

class SaleController {
    async update(req, res, next) {
        try {
            let {date, quantity, userId, tourId} = req.body

            const balance = await Wallet.findOne({attributes: ['value'], where: {userId: userId}})
            
            const tour = await Tour.findOne({
                attributes: ['price'], 
                include: [{
                    model: Reduction,
                    attributes: ['amount']
                }],
                where: {id: tourId}
            })
            
            console.log(`Баланс: ${balance.value}\nЦента: ${tour.price}\nСкидка: ${tour.reduction.amount}`)
            
            if ((tour.price * ((100 - tour.reduction.amount)/100) > balance.value))
                return res.json('Недостаточно средств')

           
            const sale = await Sale.update({date, quantity, tourId},{where: {userId: userId}} )

            return res.json(sale)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    
    async getAll(req, res) {
        const sale = await Sale.findAll({
            attributes: ["id", "quantity", "date"],
            include: [
            {
                model: Tour,
                attributes: ["tour_name"]
            },
            {
                model: User,
                attributes: ["first_name", "last_name"]
            }
        ]})

        return res.json(sale)
    }
    
    async get(req, res) {
        let {userId} = req.params

        const sale = await Sale.findOne({
            include:
            [{
                model: Tour,
                include: [{
                    model: Reduction,
                    attributes: ['amount']
                }]
            }],
            where: {userId}})

        return res.json(sale)
    }
}

module.exports = new SaleController()