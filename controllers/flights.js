const Flight = require('../models/flight');


module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addDestination
}

async function index(req, res) {
    const allFlights = await Flight.find();
    res.render('flights/index', {
        flights: allFlights,
    });
}
 
function newFlight(req, res) {
    res.render('flights/new');
}


async function create(req, res) {
    console.log(req.body);
    await Flight.create(req.body);
    res.redirect('/flights');
}

async function show(req, res) {
    try {
      const flight = await Flight.findById(req.params.id);
      res.render('flights/show', { flight });
    } catch (err) {
      console.log(err);
      res.render('error');
    }
  }
  
  async function addDestination(req, res, next) {
    try {
      const flight = await Flight.findById(req.params.id);
      flight.destinations.push(req.body);
      await flight.save();
      res.redirect(`/flights/${flight._id}`);
    } catch (err) {
      console.log(err);
      res.render('error');
    }
  }
  
  
