const uuid = require('uuid')
const path = require('path');
const {Tour, Country, Feeding, Reduction, Tour_img} = require('../models/models')
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
                countryId,
                feedingId,
                reductionId,
            } = req.body

            const tour = await Tour.create({
                tour_name,
                price,
                date,
                dep_city,
                adilts,
                children,
                days,
                nights,
                countryId,
                feedingId,
                reductionId,
            });
            
            return res.json(tour)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async create_img(req, res, next) {
        try {
            let {tourId} = req.body

            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const tour_img = await Tour_img.create({tourId ,img: fileName})

            return res.json(tour_img)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let tour = await Tour.findAll({attributes: ["id","tour_name", "price", "date", "dep_city", "adilts", "children", "days", "nights"],
            include: [
            {
                model: Country,
                attributes: ["name"]
            },
            {
                model: Feeding,
                attributes: ["type"]
            },
            {
                model: Reduction,
                attributes: ["amount"]
            }
        ]})

        return res.json(tour)
    }

    async getOne(req, res) {
        const {id} = req.params

        let tour = await Tour.findAll({attributes: ["id","tour_name", "price", "date", "dep_city", "adilts", "children", "days", "nights"],
            include: 
            [{
                model: Country,
                attributes: ["name"]
            },
            {
                model: Feeding,
                attributes: ["type"]
            },
            {
                model: Reduction,
                attributes: ["amount"]
            }],
            where: {id}
        })
        return res.json(tour)
    }

    async delete(req, res) {
     
    }

}

module.exports = new TourController()