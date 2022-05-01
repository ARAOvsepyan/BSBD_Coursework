const {Country} = require('../models/models')

class CountryController {
    async create(req, res) {
        let {name} = req.body

        const country = await Country.create({name})

        return res.json(country)
    }

    async getAll(req, res) {
        let country = await Country.findAll()

        return res.json(country)
    }

    async getByName(req, res) {
        let {name} = req.params

        let country = await Country.findAll({where: {name}})

        return res.json(country)
    }

}

module.exports = new CountryController()