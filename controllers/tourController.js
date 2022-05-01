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
                img: fileName,
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
        let tour = await Tour.findAll()
        return res.json(tour)
    }

    async getOne(req, res) {
        const {id} = req.params

        let tour = await Tour.findAll({where: {id}})
        return res.json(tour)
    }

    async delete(req, res) {
        const {tour_name} = req.params

        try {
            const tour = await Tour.findAll({
                attributes: ['img'], 
                where: {tour_name: tour_name}
            })
    
            
            fs.unlink(path.resolve(__dirname, '..', 'static', tour[0].img))
            
            const tour_res = await Tour.destroy({where: {tour_name: tour_name}})

            return res.json(tour_res)
        } catch (e) {
            return next(ApiError.internal('Такого поста не существует'))
        }      
    }

}

module.exports = new TourController()