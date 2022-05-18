const {Wallet} = require('../models/models')

class FeedingController {
    async top_up(req, res) {
        let {value, userId} = req.body

        const balance = await Wallet.findOne({attributes: ['value'], where: {userId: userId}})
        balance.value += value

        const wallet = await Wallet.update({value: balance.value}, {where: {userId: userId}})

        return res.json(wallet)
    }

    async buy(req, res) {
        let {price, userId} = req.body

        const balance = await Wallet.findOne({attributes: ['value'], where: {userId: userId}})
        balance.value -= price

        const wallet = await Wallet.update({value: balance.value}, {where: {userId: userId}})

        return res.json(wallet)
    }

    async return(req, res) {
        let {price, userId} = req.body

        const balance = await Wallet.findOne({attributes: ['value'], where: {userId: userId}})
        balance.value += (price/2)

        const wallet = await Wallet.update({value: balance.value}, {where: {userId: userId}})

        return res.json(wallet)
    }

    async get(req, res) {
        let {userId} = req.params

        let wallet = await Wallet.findOne({attributes: ['value'], where: {userId: userId}})

        return res.json(wallet)
    }

}

module.exports = new FeedingController()