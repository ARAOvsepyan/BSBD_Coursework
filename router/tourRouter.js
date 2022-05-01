const Router = require('express')
const router = new Router()
const tourController = require('../controllers/tourController')

router.post('/', tourController.create)
router.get('/', tourController.get)

module.exports = router