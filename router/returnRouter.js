const Router = require('express')
const router = new Router()
const returnController = require('../controllers/returnController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, returnController.update)
router.get('/:userId', authMiddleware, returnController.update)

module.exports = router