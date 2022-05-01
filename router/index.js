const Router = require('express')
const router = new Router()
const tourRouter = require('./tourRouter')
const userRouter = require('./userRouter')

router.use('/tour', tourRouter)
router.use('/user', userRouter)

module.exports = router