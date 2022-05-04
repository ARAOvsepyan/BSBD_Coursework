const {Sale, Tour} = require('../models/models')

class SaleController {
    async update(req, res) {
        let {date, quantity, userId, tourId} = req.body

        const sale = await Sale.update({date, quantity, tourId},{where: {userId}} )

        return res.json(sale)
    }

    async get(req, res) {
        let {userId} = req.params

        const sale = await Sale.findAll({where: {userId}})

        return res.json(sale)
    }
}

module.exports = new SaleController()