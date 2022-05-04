const Router = require('express')
const router = new Router()
const returnController = require('../controllers/returnController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', returnController.update)

module.exports = router