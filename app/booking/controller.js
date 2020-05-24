'use strict'

const carsModel = require('../models/carsNearby')
const moment = require('moment')
const bookingModel = require('../models/booking')

const CONSTANT = require('../helpers/contants')

class booking {


    registerCars(data) {

        try {

            console.log(data);

            return new Promise((resolve, reject) => {
                if (!data.currentCoordinates || !data.currentLat || !data.currentLat || !data.currentLat) {

                    reject(CONSTANT.MISSING_PARAMS)
                }
                else {
                    const cars = new carsModel(data)
                    cars.save().then(data => {
                        resolve(data)
                    }).catch(err => {
                        console.log(err);

                    })
                }


            }).catch(err => {
                throw err

            })

        } catch (err) {
            throw err
        }

    }
    getNearbyCars(data) {

        try {
            return new Promise((resolve, reject) => {
                if (!data.latitude || !data.longitude)
                    reject(CONSTANT.LOCATION_MISSING)
                else {

                    carsModel.find({
                        status: true,
                        currentCoordinates: { $geoWithin: { $centerSphere: [[data.longitude, data.latitude], 5 / 6371] } }
                    }).then(result => {
                        resolve(result)
                    })
                        .catch(error => {
                            if (error.errors)
                                return reject(commonController.handleValidation(error))
                            if (error)
                                return reject(error)
                        })
                }
            })
        } catch (err) {
            throw err
        }

    }


    createBooking(data) {
        try {
            return new Promise((resolve, reject) => {

                if (!data.registeredBy || !data.pickUpLocation || !data.dropLocation || !data.carId)
                    reject(CONSTANT.BOOKING_DETAILS_MISSING)
                else {


                    data.date = moment().valueOf()
                    const booking = new bookingModel(data)

                    booking.save({}).then(result => {
                        resolve(result)
                    })
                        .catch(error => {

                            if (error)
                                return reject(error)
                        })
                }
            })
        } catch (err) {
            throw err
        }
    }

    bookingHistory(data) {
        try {
            return new Promise((resolve, reject) => {





                let page = 1;
                if (Number(data.page)) page = Number(data.page);
                let limit = 6;
                if (Number(data.limit)) limit = Number(data.limit);


                let query = {}
                if (data && data.email) {
                    query.registeredBy = data.email
                }

                bookingModel.find(query)
                    .populate('carId', 'name')
                    .limit(limit)
                    .skip((page - 1) * limit)
                    .then(result => {
                        resolve(result)
                    })
                    .catch(error => {

                        if (error)
                            return reject(error)
                    })

            })
        } catch (err) {
            throw err
        }
    }

}



module.exports = new booking();

