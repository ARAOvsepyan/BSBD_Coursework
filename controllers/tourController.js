const uuid = require('uuid')
const path = require('path');
const {Tour} = require('../models/models')
const ApiError = require('../error/ApiError');

class TourController {
    async create(req, res, next) {
        try {
            let {
                tour_name,
                price,
                date,
                dep_city,
                adilts,
                children,
                days,
                nights,
                countyId,
                feedinfId,
                reductionId,
            } = req.body

            //const {imgId} = req.files
            //let fileName = uuid.v4() + ".jpg"
            //img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const tour = await Tour.create({
                tour_name,
                price,
                date,
                dep_city,
                adilts,
                children,
                days,
                nights,
                countyId,
                feedinfId,
                reductionId,
            });

            return res.json(tour)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let message = 'It s tour getAll method'
        return res.json(message)
    }

    async getOne(req, res) {
        const {id} = req.params

        let message = `It s tour getOne ${id} method`
        return res.json(message)
    }

}

module.exports = new TourController()