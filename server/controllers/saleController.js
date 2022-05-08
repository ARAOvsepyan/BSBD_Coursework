const {Sale, Tour} = require('../models/models')

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