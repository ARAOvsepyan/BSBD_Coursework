const Router = require('express')
const router = new Router()
const reducionController = require('../controllers/reductionController')

router.post('/', reducionController.create)
router.get('/:amount', reducionController.getByAmount)

module.exports = router