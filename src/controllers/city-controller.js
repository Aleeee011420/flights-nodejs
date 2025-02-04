const { StatusCodes } = require('http-status-codes');
const { cityService } = require('../services');
const AppError = require('../utils/errors/app-error');

async function createCity(req, res) {
    try {
       
        const city = await cityService.createCity({
            name: req.body.name
        });

       
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "City created successfully",
            data: city,
            error: null
        });

    } catch (error) {
        console.error("Error creating city:", error); // ✅ Log error for debugging

        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Something went wrong",
            data: null,
            error: error
        });
    }
}

async function destroyCity(req,res){
    try{
        const response=cityService.destroyCity(req.params.id);
        
       return res.status(200).json({
        success: true,
        message: "City destroyed successfully",
        data: response,
        error: null
    });

} catch (error) {
    console.error("Error creating city:", error); 

    return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Something went wrong",
        data: null,
        error: error
    });
    }
}

async function getCities(req,res){
    try{
        const cities= await cityService.getCities();
        return res.status(200).json({
            success: true,
            message: "Cities fetched successfully",
            data: cities,
            error: null
        });
    
    } catch (error) {
        console.error("Error creating city:", error); 
    
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Something went wrong",
            data: null,
            error: error
        });
        }
    
}
async function getCity(req,res){
    try{
        const city= await cityService.getCity(req.params.id);
        return res.status(200).json({
            success: true,
            message: "City fetched successfully",
            data: city,
            error: null
        });
    
    } catch (error) {
        console.error("Error creating city:", error); 
    
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Something went wrong",
            data: null,
            error: error
        });
        }
    
}
async function updateCity(req,res){
    try{
        const city= cityService.updateCity(req.params.id,{
            name: req.body.name
        });
        return res.status(StatusCodes.ACCEPTED).json({
            success:true,
            message:"city updated succussfully",
            data:city,
            error:null
        });
    }catch(error){
        return res.status(error.statusCode || 500).json({
            success:false,
            message:error.message || "something went wrong",
            data:null,
            error:error
        });
    }
}


module.exports = { createCity,
    destroyCity,
    getCities,
    getCity,
    updateCity


 };
