'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flights extends Model {
   
    static associate(models) {
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
        as:'airplaneDetail'
      });
      this.belongsTo(models.Airports,{
        foreignKey:'departureAirportId',
        as:'departureAirport',
      });
      this.belongsTo(models.Airports,{
        foreignKey:'arrivalAirportId',
        as:'arrivalAirport',
      });
      
    }
  }
  flights.init({
    flightNumber:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    airplaneId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    departureAirportId: {
      type: DataTypes.STRING,
      allowNull:false
    },
    arrivalAirportId: {
      type: DataTypes.STRING,
      allowNull:false
    },
    arrivalTime:{
      type: DataTypes.DATE,
      allowNull:false
    },
    departureTime:{
      type: DataTypes.DATE,
      allowNull:false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate: {
      type:DataTypes.STRING,
     
    } ,
    totalSeats:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'flights',
  });
  return flights;
};