'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.flights,{
        foreignKey:'airplaneId',
        onDelete:'CASCADE',
      });
      this.hasMany(models.seat,{
        foreignKey:'airplaneId',
        onDelete:'CASCADE'
      });
    }
  }
  Airplane.init({
    modelName:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    Capacity:{
     type: DataTypes.INTEGER,
     allowNull:false,
     defaultValue:0,
    
    } 
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};