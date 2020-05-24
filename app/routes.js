const express = require("express");
const booking = require('./booking/routes')


const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const route = express.Router()



const options = {
    swaggerDefinition: {
        info: {
            title: 'Swagger for Booking APIs',
            version: '1.0.0',
            description: 'REST APIs for Booking Cabs',
            contact: {
                email: 'kumar16.pawan@gmail.com',
            },
        },
        tags: [
            {
                name: 'Bookings',
                description: 'Bookings API',
            },
        ],
        schemes: ['http'],
        host: 'localhost:8081',
        basePath: '/api/booking',
    },
    apis: ['./app/swagger/swagger.js',],
};


const swaggerSpec = swaggerJSDoc(options);


route.get('/json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

route.use('/booking', booking)
route.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));








module.exports = route;