const {flightService}= require('../services');

const {StatusCodes}= require('http-status-codes');

async function createFlight(req,res){
    try{
        const flight=await flightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats


        });
        return res.status(StatusCodes.OK).json({
            succuss:true,
            data:{flight},
            error:{},
            message:"flight created succussfully"

        })
    }catch(error){
        return res.status(error.statusCode).json({
            succuss:false,
            error:{error},
            message:"something went wrong"
        });
    }

}
async function getAllFlights(req,res){
    try{
        const flights= await flightService.getAllFlights(req.query);
        return res.status(StatusCodes.OK).json({
            succuss:true,
            data:{flights},
            error:{},
            message:"flights fetched succussfully"

        })
    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            succuss:false,
            error:{error},
            message:"something went wrong"
        });
    }
}
async function destroyFlight(req,res){
    try{
        const response= await flightService.destroyFlight(req.params.id);
        return  res.status(StatusCodes.OK).json({
            succuss:true,
            data:{response},
            error:{},
            message:"flight destroyed succussfully"

        })
    }catch(error){
        return res.status(error.statusCode).json({
            succuss:false,
            error:{error},
            message:"something went wrong"
        });
    }
}
module.exports={
    createFlight,
    getAllFlights,
    destroyFlight

}