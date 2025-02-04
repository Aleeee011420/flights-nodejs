const {StatusCodes}= require('http-status-codes');
const {cityRepository}= require('../repositories');
const AppError = require('../utils/errors/app-error');
const CityRepository= new cityRepository();

async function createCity(data){
   try{
    const city= await CityRepository.create(data);
    return city;
   }catch(error){
    if(error.name == 'SequelizeValidationError' || error.name== 'SequelizeUniqueConstraintError'){
        let explaination=[];
        error.errors.forEach((err)=>{
            explaination.push(err.message);
        });
        throw new AppError(explaination, StatusCodes.BAD_REQUEST);
    }
    throw new AppError('cannot create a new city object');
   }
}
async function destroyCity(id){
    try{
        const response=await CityRepository.destroy(id);
        return response;
    }catch(error){
        throw new AppError('something went wrong while deleting city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCities(){
    try{  const cities=  await CityRepository.getAll();
    return cities;
}catch(error){
    throw new AppError('unable to fetch all the cities', StatusCodes.INTERNAL_SERVER_ERROR);
}
}
async function getCity(id){
    try{  const city=  await CityRepository.get(id);
    return city;
}catch(error){
    throw new AppError('unable to fetch all the cities', StatusCodes.INTERNAL_SERVER_ERROR);
}
}
async function updateCity(id,data){
    try{ const response=await CityRepository.update(id,data);
        return response;
}catch(error){
    throw new AppError('something went wrong while updating',StatusCodes.INTERNAL_SERVER_ERROR);
}
}
   
module.exports= {
    createCity,
    destroyCity,
    getCities,
    getCity,
    updateCity
}