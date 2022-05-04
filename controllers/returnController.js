const {Return, Sale} = require('../models/models')

class ReturnController {
    async update(req, res) {
        let {date, quantity, userId, cause} = req.body
        
        const sale_q = await Sale.findAll({where: {userId}})
        sale_q[0].quantity -= quantity

        if (sale_q[0].quantity <= 0) {
            const sale = await Sale.update({
                date: null,
                quantity: null,
                tourId: null
            },
            {
                where: {userId}
            })

            const ret = await Return.create({
                date,
                quantity,
                cause,
                userId,
                saleId: sale_q[0].id,
                tourId: sale_q[0].tourId
            })
            
            return res.json(ret)
        } else {
            const sale = await Sale.update({
                date: date,
                quantity: sale_q[0].quantity,
            },
            {
                where: {userId}
            })
        }

    }

}

module.exports = new ReturnController()