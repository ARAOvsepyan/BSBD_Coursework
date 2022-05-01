const Router = require('express')
const router = new Router()
const countryController = require('../controllers/countryController')
const checkRole = require('../middleware/checkMiddleware')

router.post('/', checkRole('ADMIN'), countryController.create)
router.get('/', countryController.getAll)
router.get('/:name', countryController.getByName)

module.exports = router