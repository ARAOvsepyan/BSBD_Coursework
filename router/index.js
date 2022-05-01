const Router = require('express')
const router = new Router()
const tourRouter = require('./tourRouter')
const userRouter = require('./userRouter')
const saleRouter = require('./saleRouter')
const returnRouter = require('./returnRouter')
const countryRouter = require('./countryRouter')
const feedingRouter = require('./feedingRouter')
const reductionRouter = require('./reductionRouter')

router.use('/tour', tourRouter)
router.use('/user', userRouter)
// router.use('/sale', saleRouter)  
// router.use('/return', returnRouter)
router.use('/country', countryRouter)
router.use('/feeding', feedingRouter)
router.use('/reduction', reductionRouter)

module.exports = router