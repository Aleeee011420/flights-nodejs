const {StatusCodes} = require('http-status-codes');

const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplance object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        console.error("Database Fetch Error:", error);  
        throw new AppError('Cannot fetch data of the Airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id){
    try{
    const airplane= await airplaneRepository.get(id);
    return airplane;
    }catch(error){
        if(error.StatusCode == StatusCodes.NOT_FOUND){
            throw new AppError('the airplane you requested is not present',error.StatusCode);
        }
        throw new AppError('cannot fetch the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function destroyAirplane(id){
    try{
        const response= await airplaneRepository.destroy(id);
        return response;
    }catch(error){
        if(error.StatusCode == StatusCodes.NOT_FOUND){
            throw new AppError('airplane is not present',error.StatusCode);
        }
        throw new AppError('something went wrong while destroying the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function updateAirplane(data,id){
    try{
       

        const airplane= await airplaneRepository.update(id,data);
        return airplane;
    }catch(error){
        if(error.StatusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('airplane you want to update doesnot exist', error.StatusCode);
        }
        throw new AppError('something went wrong while updating aeroplane',StatusCodes.INTERNAL_SERVER_ERROR);

    }
}
 
 
module.exports = {
    createAirplane,
    destroyAirplane,
    getAirplanes,
    getAirplane,
    updateAirplane
    
}