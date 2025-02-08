
const {StatusCodes}= require('http-status-codes');
const {airportService}= require('../services');


async function createAirport(req,res){
    try{
        const airport= await airportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        });
        return res.status(201).json({
            success: true,
            message: "Airport created successfully",
            data: airport
        });

    } catch (error) {
        console.error("Error creating airport:", error);

        return res.status(error?.statusCode || 500).json({  
            success: false,
            message: error?.message || "Something went wrong",
            error: error
        });
    }

}

async function getAirport(req,res){
    try{
        const airport= await airportService.getAirport(req.params.id);
        console.log('got airport succussfulyy',airport);
        return res.status(200).json({
            succuss:true,
            data:{airport},
            error:{}
        });

    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            succuss:false,
            data:{},
            error:error
        });
    }
}
async function getAirports(req,res){
    try{
        const airports= await airportService.getAirports();
        return  res.status(200).json({
            succuss:true,
            data:{airports},
            error:{}
        });

    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            succuss:false,
            data:{},
            error:error
        });
    }
}
async function destroyAirport(req,res){
    try{
        const response= await airportService.destroyAirport(req.params.id);
        return  res.status(200).json({
            succuss:true,
            data:`airport with the given id destroyed succussfully ${response}`,
            error:{}
        });

    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            succuss:false,
            data:{},
            error:error
        });
    }
}



module.exports={
    createAirport,
    getAirport,
    getAirports,
    destroyAirport

}