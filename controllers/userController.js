
class UserController {
    async registration(req, res) {
        return res.json()
    }

    async login(req, res) {

        return res.json()
    }

    async changeRole(req, res) {
        const {login} = req.params
           
        return res.json()
    }

    async check(req, res) {

        return res.json()
    }
}

module.exports = new UserController()