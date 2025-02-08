const crudRepository= require('./crud-repository');

const {flights}= require('../models')
class flightsRepository extends crudRepository{
constructor(){
    super(flights);

    
}
}

module.exports =flightsRepository;

