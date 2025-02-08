const AirportService = require('./airport-service');

module.exports = {
    airplaneService: require('./airplane-service'),
    cityService: require('./city-service'),
    airportService: AirportService 
};
