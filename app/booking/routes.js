const express = require('express')
const bookingController = require('./controller')
const CONSTANT = require('../helpers/contants')

let bookingRoute = express.Router()


//registered Cars at different locations
bookingRoute.route('/registerCars')
    .post((req, res) => {
        bookingController.registerCars(req.body).then(result => {
            return res.status(200).json({
                success: CONSTANT.TRUE,
                data: result,
                message: CONSTANT.REGISTERED_SUCCESS
            })
        }).catch(err => {
            console.log(err);
            return res.status(403).json({ message: err, success: CONSTANT.FALSE })
        })
    })


// get Nearby Cars
bookingRoute.route('/getNearbyCars')
    .post((req, res) => {
        bookingController.getNearbyCars(req.body).then(result => {
            return res.status(200).json({
                success: CONSTANT.TRUE,
                data: result,
                message: CONSTANT.FETCHED_SUCCESS
            })
        }).catch(err => {
            console.log(err);
            return res.status(403).json({ message: err, success: CONSTANT.FALSE })
        })
    })


// get Nearby Cars
bookingRoute.route('/createBooking')
    .post((req, res) => {
        bookingController.createBooking(req.body).then(result => {
            return res.send({
                success: CONSTANT.TRUE,
                data: result,
                message: CONSTANT.BOOKING_SUCCESS
            })
        }).catch(err => {
            console.log(err);
            return res.status(403).json({ message: err, success: CONSTANT.FALSE })
        })
    })

// Display Past bookings
bookingRoute.route('/bookingHistory')
    .get((req, res) => {
        bookingController.bookingHistory(req.query).then(result => {
            return res.send({
                success: CONSTANT.TRUE,
                data: result,
                message: CONSTANT.FETCHED_SUCCESS
            })
        }).catch(err => {
            console.log(err);
            return res.status(403).json({ message: err, success: CONSTANT.FALSE })
        })
    })

module.exports = bookingRoute;