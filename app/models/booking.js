const mongoose = require('mongoose');

const Schema = mongoose.Schema;


var bookingSchema = new Schema({



    registeredBy: { type: String },
    pickUpLocation: [{ type: Number }],
    dropLocation: [{ type: Number }],
    carId: { type: Schema.Types.ObjectId, ref: "carsNearby" },
    date: { type: Number }


})



bookingSchema.set('toObject', { virtuals: true });
bookingSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('booking', bookingSchema);