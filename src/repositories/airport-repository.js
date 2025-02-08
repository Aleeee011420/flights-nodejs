const crudRepository= require('./crud-repository');

const {Airports}= require('../models');

class AirportsRepository extends crudRepository{
 constructor(){
    super(Airports);
 }
}

module.exports=AirportsRepository;