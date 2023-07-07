const Flight = require('../models/flight');


module.exports = {
    index,
    new: newFlight,
    create
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