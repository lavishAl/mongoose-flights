var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET ALL flights */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show)
router.post('/:id', flightsCtrl.addDestination);

module.exports = router;









// AAU, I want to view a list of all flights 
// (index functionality) that displays each flight’s airline, 
// airport, flight no., and departure date/time (consider 
//   formatting the departs property).