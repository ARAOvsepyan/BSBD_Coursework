const Router = require('express')
const router = new Router()
const feedingController = require('../controllers/feedingController')
const checkRole = require('../middleware/checkMiddleware')

router.post('/', checkRole('ADMIN'), feedingController.create)
router.get('/:type', feedingController.getByType)

module.exports = router