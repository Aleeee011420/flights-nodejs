const {flightsRepository}= require('../repositories');

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

async function getFlight(id){
    try{
        const flight=await flightRepository.get(id);
        return flight;
    }catch(error){
        throw new AppError('something went wrong while fetching the flight with this id',StatusCodes.BAD_REQUEST);
    }
}

async function getFlights(){
try{
    const flights= flightRepository.getAll();
    return flights;
}catch(error){
    throw new AppError('something went wrong while fetching the flights',StatusCodes.INTERNAL_SERVER_ERROR);
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
        getFlight,
        getFlights,
        destroyFlight
    }
  
