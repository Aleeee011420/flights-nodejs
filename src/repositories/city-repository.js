const crudRepository =require('./crud-repository');

const {City}= require('../models');
class cityRepository extends crudRepository{
    constructor(){
        super(City);
    }

}
module.exports=cityRepository;