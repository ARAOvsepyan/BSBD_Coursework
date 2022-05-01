const {Reduction} = require('../models/models')

class ReductionController {
    async create(req, res) {
        let {type, amount} = req.body

        const reduction = await Reduction.create({type, amount})

        return res.json(reduction)
    }

    async getByAmount(req, res) {
        let {amount} = req.params

        let reduction = await Reduction.findAll({where: {amount}})

        return res.json(reduction)
    }

}

module.exports = new ReductionController()