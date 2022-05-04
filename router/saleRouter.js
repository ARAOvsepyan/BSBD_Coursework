const Router = require('express')
const router = new Router()
const saleController = require('../controllers/saleController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', saleController.update)
router.get('/:userId', authMiddleware, saleController.get)

module.exports = router