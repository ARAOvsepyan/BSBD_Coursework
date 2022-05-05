const Router = require('express')
const router = new Router()
const tourController = require('../controllers/tourController')
const checkRole = require('../middleware/checkMiddleware')

router.post('/', checkRole('ADMIN'), tourController.create)
router.get('/', tourController.getAll)
router.get('/:id', tourController.getOne)
router.delete('/:tour_name', checkRole('ADMIN'), tourController.delete)

module.exports = router