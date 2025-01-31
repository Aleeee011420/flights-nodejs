const { StatusCodes } = require('http-status-codes');
const { airplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAirplane(req, res) {
    try {
        const airplane = await airplaneService.createAirplane({
            modelName: req.body.modelName,
            Capacity: req.body.Capacity
        });

        
        let successResponse = { ...SuccessResponse };
        successResponse.data = airplane;

        return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        console.error("Caught Error:", error);

        
        let errorResponse = { ...ErrorResponse };
        errorResponse.error = error;

        return res.status(500).json(errorResponse);
    }
}
async function getAirplane(req,res){
    try{
        const airplane= await airplaneService.getAirplane(req.params.id);
        let successResponse = { ...SuccessResponse };
        successResponse.data = airplane;

        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        console.error("Caught Error:", error);

        
        let errorResponse = { ...ErrorResponse };
        errorResponse.error = error;

        return res.status(500).json(errorResponse);
    }
}
async function getAirplanes(req,res){
    try{
        const airplanes= await airplaneService.getAirplanes();
        let successResponse = { ...SuccessResponse };
        successResponse.data = airplanes;

        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        console.error("Caught Error:", error);

        
        let errorResponse = { ...ErrorResponse };
        errorResponse.error = error;

        return res.status(500).json(errorResponse);
    }
}
async function destroyAirplane(req,res){
    try{
        const response= await airplaneService.destroyAirplane(req.params.id);
        let successResponse = { ...SuccessResponse };
        successResponse.data = response;

        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        console.error("Caught Error:", error);

        
        let errorResponse = { ...ErrorResponse };
        errorResponse.error = error;

        return res.status(500).json(errorResponse);
    }
}
async function updateAirplane(req,res){
    try{
    const airplane= await airplaneService.updateAirplane({
        modelName: req.body.modelName,
        Capacity: req.body.Capacity
    },
    req.params.id);
    let successResponse= {...SuccessResponse};
    successResponse.data= airplane;
    return res.status(StatusCodes.OK).json(successResponse);
    }catch(error){
        console.log('caught error',error);

        let errorResponse={...ErrorResponse};
        return res.status(500).json(errorResponse);

    }
}

module.exports = {
    createAirplane,
    getAirplane,
    getAirplanes,
    destroyAirplane,
    updateAirplane

};


