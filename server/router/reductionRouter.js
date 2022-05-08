const Router = require('express')
const router = new Router()
const reducionController = require('../controllers/reductionController')
const checkRole = require('../middleware/checkMiddleware')

router.post('/', checkRole('ADMIN'), reducionController.create)
router.get('/', reducionController.getAll)

module.exports = router