
class TourController {
    async create(req, res) {
        let message = 'It s tour post method'
        return res.json(message)
    }

    async getAll(req, res) {
        let message = 'It s tour get method'
        return res.json(message)
    }

    async getOne(req, res) {
        let message = 'It s tour get method'
        return res.json(message)
    }

}

module.exports = new TourController()