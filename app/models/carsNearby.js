const mongoose = require('mongoose');

const Schema = mongoose.Schema;


var carsNearbyModelSchema = new Schema({


    name: { type: String },
    currentCoordinates: [{ type: Number }],
    currentLat: { type: Number },
    status: { type: Boolean, default: true },// false for occupied  true for active
    currentLong: { type: Number },

})



carsNearbyModelSchema.set('toObject', { virtuals: true });
carsNearbyModelSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('carsNearby', carsNearbyModelSchema);