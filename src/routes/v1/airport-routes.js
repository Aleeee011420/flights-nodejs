
const express= require('express');
const  {airportController} = require('../../controllers');


const router= express.Router();



router.post('/',airportController.createAirport);
router.get('/:id',airportController.getAirport);
router.get('/',airportController.getAirports);
router.delete('/:id',airportController.destroyAirport);

module.exports=router;