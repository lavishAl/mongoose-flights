const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addDestination,
    add
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
      const tickets = await Ticket.find({ flight: flight._id });
      res.render('flights/show', { flight, tickets });
    } catch (err) {
      console.log(err);
      res.render('error', { message: err.message, error: err });
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
      res.render('error', { message: err.message, error: err });
    }
  }  

  async function add(req, res, next) {
    try {
      const seat = req.body.seat;
      const price = req.body.price;
      const flightId = req.params.id;
  
      const ticket = new Ticket({ seat, price, flight: flightId });
      await ticket.save();
  
      res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
      console.log(err);
      res.render('error');
    }
  }
  
  
