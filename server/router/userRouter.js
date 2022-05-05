const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const checkRole = require('../middleware/checkMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/registration_admin', checkRole('ADMIN'), userController.registration_admin)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router