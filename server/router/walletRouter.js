const Router = require('express')
const walletController = require('../controllers/walletController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, walletController.top_up)
router.post('/buy', authMiddleware, walletController.buy)
router.post('/return', authMiddleware, walletController.return)
router.get('/:userId', authMiddleware, walletController.get)


module.exports = router