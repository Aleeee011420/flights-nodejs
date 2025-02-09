const {flightsRepository}= require('../repositories');
const {Op} = require('sequelize');
const {StatusCodes} = require('http-status-codes');
const AppError =require('../utils/errors/app-error');

const flightRepository= new flightsRepository();

async function createFlight(data){
    try{
        const flight= await flightRepository.create(data);
        return flight;

    }catch(error){
        throw new AppError('something went wrong while creating flight',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAllFlights(query){
    let customFilter={};
    let sortFilter=[];
    const endTripTime="23:59:00";

    if(query.trips){
        [departureAirportId,arrivalAirportId]= query.trips.split("-");
        customFilter.departureAirportId=departureAirportId;
        customFilter.arrivalAirportId=arrivalAirportId;
    }
    if(query.price){
        [minPrice,maxPrice]=query.price.split("-");
        customFilter.price={
            [Op.between]:[minPrice,((maxPrice == undefined) ? 20000:maxPrice)]
        }
    }
    if(query.travellers){
        customFilter.totalSeats={
            [Op.gte]:query.travellers
        }
    }
    if(query.tripDate){
        customFilter.departureTime = {
            [Op.between]:[query.tripDate,query.tripDate+endTripTime]
        }
    }
    if(query.sort){
        const params= query.sort.split(',');
        const sortFilters= params.map((param)=>
            param.split('_'));
        sortFilter= sortFilters;
    }
    try{
        const flights= await flightRepository.getAllFlights(customFilter,sortFilter);
        return flights;
    }catch(error){
        throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function destroyFlight(id){
    try{
  const response= await flightRepository.destroy(id);
    return response;
}catch(error){
    throw new AppError('something went wrong while destroying the flight',StatusCodes.INTERNAL_SERVER_ERROR);
}
    }

    module.exports ={
        createFlight,
         getAllFlights,
        destroyFlight
    }
  
