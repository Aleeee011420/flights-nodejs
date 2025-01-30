const crudRepository= require('./crud-repository');

const {Airplane}= require('../models');
console.log('inside the airplane repository');
class AirplaneRepository extends crudRepository{
 constructor(){
    super(Airplane);
 }
}

module.exports=AirplaneRepository;