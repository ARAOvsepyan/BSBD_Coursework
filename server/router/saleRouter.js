const Router = require('express')
const router = new Router()
const saleController = require('../controllers/saleController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkMiddleware')

router.post('/', authMiddleware, saleController.update)
router.get('/:userId', authMiddleware, saleController.get)
router.get('/', checkRole('ADMIN'), saleController.getAll)


module.exports = router