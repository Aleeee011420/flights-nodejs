const crudRepository= require('./crud-repository');
const {Sequelize}= require('sequelize');

const {flights,Airplane,Airports,City}= require('../models')
class flightsRepository extends crudRepository{
constructor(){
    super(flights);

    
}
async getAllFlights(filter,sort){
    try{
         const response= await flights.findAll({
        where :filter,
        order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: 'airplaneDetail'
                },
                {
                    model: Airports,
                    required: true,
                    as: 'departureAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("flights.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                    },
                    include:{
                        model:City,
                        required:true
                    }
                },
                {
                    model: Airports,
                    required: true,
                    as: 'arrivalAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("flights.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                    },
                    include:{
                        model:City,
                        required:true
                    }
                }
            ]
        });
    return response;
}
    catch(error){
        console.error("🔥 Sequelize Error in getAllFlights:", error);
        throw error;
    }
}
}
   


module.exports =flightsRepository;

