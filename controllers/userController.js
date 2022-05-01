
class UserController {
    async registration(req, res) {
        let message = 'It s user registration method'
        return res.json(message)
    }

    async login(req, res) {
        let message = 'It s user login method'
        return res.json(message)
    }

    async changeRole(req, res) {
        const {login} = req.params

        let message = `It s user changeRole ${login.toString()} method`
        return res.json(message)
    }

    async check(req, res) {
        let message = 'It s user ckeck method'
        return res.json(message)
    }
}

module.exports = new UserController()