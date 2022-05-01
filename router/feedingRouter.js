const Router = require('express')
const router = new Router()
const feedingController = require('../controllers/feedingController')

router.post('/', feedingController.create)
router.get('/:type', feedingController.getByType)

module.exports = router