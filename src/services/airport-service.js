const {StatusCodes}= require('http-status-codes');

const {AirportsRepository}= require('../repositories');

const AppError= require('../utils/errors/app-error');

const airportRepository= new AirportsRepository();


async function createAirport(data){
    try{
        const airport=await airportRepository.create(data);
        return airport;
    }catch(error){
        if(error.name == 'SequelizeValidationError'){
            let explaination=[];
            error.errors.forEach((err)=>{
                explaination.push(err.message);
            });
            throw new AppError(explaination,StatusCodes.BAD_REQUEST);
        }
        throw new AppError(error.message || 'cannot create the airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id){
    try{
        const airport= await airportRepository.get(id);
        return airport;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('the airport you requested is not present',error.statusCode);
        }
        throw new AppError('cannot fetch data of all the airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports(){
    try{
        const airports=await airportRepository.getAll();
        return airports;
    }catch(error){
        throw new AppError('cannot fetch the data of the airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id){
    try{const response= await airportRepository.destroy(id);
    return response
}
    
catch(error){

    if(error.statusCode == StatusCodes.NOT_FOUND){
        throw new AppError('the airport you want to delete is not found',StatusCodes.BAD_REQUEST);
    }
    throw new AppError('something went wrong while deletibg the airport',StatusCodes.INTERNAL_SERVER_ERROR);

}
}

module.exports={
    createAirport,
    getAirport,
    getAirports,
    destroyAirport
}