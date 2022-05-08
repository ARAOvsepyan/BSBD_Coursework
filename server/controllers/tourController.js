const uuid = require('uuid')
const path = require('path')
const fs = require('fs/promises');
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

            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

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
                img: fileName
            });
            
            return res.json(tour)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }


    async getAll(req, res) {
        let tour = await Tour.findAll({attributes: ["id","tour_name", "price", "date", "dep_city", "adilts", "children", "days", "nights", "img"],
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

        let tour = await Tour.findOne({
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

    async delete(req, res, next) {
        const {tour_name} = req.params

        try {
            const tour = await Tour.findOne({
                where: {tour_name: tour_name}
            })
    
            fs.unlink(path.resolve(__dirname, '..', 'static', tour.img))
            
            const tour_1 = await Tour.destroy({where: {tour_name: tour_name}})

            return res.json(tour_1)
        } catch (e) {
            return next(ApiError.internal('Такого тура не существует'))
        }      
    }

}

module.exports = new TourController()