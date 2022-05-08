const {Reduction} = require('../models/models')

class ReductionController {
    async create(req, res) {
        let {amount} = req.body
        let type

        if (amount > 0) {
            type = true
        } else {
            type = false
        }

        const reduction = await Reduction.create({type, amount})

        return res.json(reduction)
    }

    async getAll(req, res) {
        let reduction = await Reduction.findAll()

        return res.json(reduction)
    }

}

module.exports = new ReductionController()