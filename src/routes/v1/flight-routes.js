const express= require('express');

const router= express.Router();

const {flightController}= require('../../controllers');

router.post('/',flightController.createFlight);
router.get('/',flightController.getAllFlights);
router.delete('/:id',flightController.destroyFlight);

module.exports=router;