const Router = require('express')
const router = new Router()
const tourController = require('../controllers/tourController')
const checkRole = require('../middleware/checkMiddleware')

router.post('/', checkRole('ADMIN'), tourController.create)
router.post('/:id', checkRole('USER'), tourController.BuyTour )
router.get('/', tourController.getAll)
router.get('/:id', tourController.getOne)
router.post('/:tour_name', checkRole('ADMIN'), tourController.delete)

module.exports = router