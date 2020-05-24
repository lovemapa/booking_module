

//===============================  Booking History==================

/**
 * @swagger
 * /bookingHistory:
 *   get:
 *     description: Get booking history
 *     tags:
 *       - Bookings
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: email of person to be filtered
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: No of results per page to be displayed
  *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Current Page to be displayed
 *     responses:
 *       200:
 *         description: Get booking history of particular user

 */



 //===============================  Create A booking ==================

/**
 * @swagger
 * /createBooking:
 *   post:
 *     description: Book a cab nearby
 *     tags:
 *       - Bookings
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: carsBooking
 *         description: Parameters for Booking.
 *         schema:
 *           type: object
 *           required:
 *              -registeredBy
 *              -carId
 *              -name
 *           properties:
 *              carId:
 *                 type: string
 *                 example: 5ec7c367d1f8b65fa9e483f5
 *              registeredBy:
 *                 type: string
 *                 example: Anonmynous@yopmail.com
 *              pickUpLocation:
 *                 type: array
 *                 items:
 *                   type:number
 *                   example:[76.732726,30.726556]
  *              dropLocation:
 *                 type: array
 *                 items:
 *                   type:number
 *                   example:[76.7902726,32.72796556]
 *     responses:
 *       200:
 *         description: new Booking
 */




 //===============================  Booking Nearby ==================

/**
 * @swagger
 * /getNearbyCars:
 *   post:
 *     description: get Nearby cars around within 5 miles
 *     tags:
 *       - Bookings
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: carsBooking
 *         description: Parameters for looking cars around
 *         schema:
 *           type: object
 *           required:
 *              -longitude
 *              -latitude
 *           properties:
 *              longitude:
 *                 type: number
 *                 example: 76.732726
 *              latitude:
 *                 type: number
 *                 example: 30.726556
 *     responses:
 *       200:
 *         description: new Registered Car
 */


  //===============================  Register A new Car by Driver ==================

/**
 * @swagger
 * /registerCars:
 *   post:
 *     description: Register a new Car by driver
 *     tags:
 *       - Bookings
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: carsBooking
 *         description: Parameters for Booking.
 *         schema:
 *           type: object
 *           required:
 *              -currentLong
 *              -currentLat
 *              -name
 *           properties:
 *              currentLong:
 *                 type: number
 *                 example: 76.732726
 *              currentLat:
 *                 type: number
 *                 example: 30.726556
 *              name:
 *                 type: string
 *                 example: Swift Dzire
 *              currentCoordinates:
 *                 type: array
 *                 items:
 *                   type:number
 *                   example:[76.732726,30.726556]
 *     responses:
 *       200:
 *         description: new Registered Car
 */
