const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new mongoose.Schema({
    airport: {type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SEA']
    },
    arrival: { type: Date }
});

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SEA']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function () {
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    }
  },
  destinations: [destinationSchema]
});


module.exports = mongoose.model('Flight', flightSchema);
 