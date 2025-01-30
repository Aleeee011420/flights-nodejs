const express= require('express');

const {airplaneController}= require('../../controllers');

const router=express.Router();


router.post('/', airplaneController.createAirplane);
router.get('/',airplaneController.getAirplanes);
router.get('/:id',airplaneController.getAirplane);
router.delete('/:id',airplaneController.destroyAirplane);



module.exports=router;





