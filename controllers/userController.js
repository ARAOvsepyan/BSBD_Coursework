
class UserController {
    async create(req, res) {
        let message = 'It s user post method'
        return res.json(message)
    }

    async get(req, res) {
        let message = 'It s user get method'
        return res.json(message)
    }

}

module.exports = new UserController()