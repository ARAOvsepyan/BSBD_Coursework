const {Sale, Tour, User} = require('../models/models')

class SaleController {
    async update(req, res, next) {
        try {
            let {date, quantity, userId, tourId} = req.body

            const sale = await Sale.update({date, quantity, tourId},{where: {userId}} )

            return res.json(sale)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    
    async getAll(req, res) {
        const sale = await Sale.findAll({
            attributes: ["quantity"],
            include: [
            {
                model: Tour,
                attributes: ["tour_name"]
            },
            {
                model: User,
                attributes: ["firs_name", "last_name"]
            }
        ]})

        return res.json(sale)
    }
    
    async get(req, res) {
        let {userId} = req.params

        const sale = await Sale.findOne({
            include:
            [{
                model: Tour
            }],
            where: {userId}})

        return res.json(sale)
    }
}

module.exports = new SaleController()