const {Feeding} = require('../models/models')

class FeedingController {
    async create(req, res) {
        let {type} = req.body

        const feeding = await Feeding.create({type})

        return res.json(feeding)
    }

    async getAll(req, res) {
        let feeding = await Feeding.findAll()

        return res.json(feeding)
    }

}

module.exports = new FeedingController()