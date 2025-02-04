const express= require('express');

const router= express.Router();

const {cityController}= require('../../controllers');

router.post('/',cityController.createCity);
router.delete('/:id',cityController.destroyCity);
router.get('/',cityController.getCities);
router.get('/:id',cityController.getCity);
router.put('/:id',cityController.updateCity);



module.exports=router;