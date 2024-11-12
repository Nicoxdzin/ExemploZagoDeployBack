const express = require('express');
const VehicleController = require('../controller/VehicleController');
const router = express.Router();
router
    .get('/', VehicleController.getAllVehicles)
    .get('/:id', VehicleController.getById)
    .post('/', VehicleController.create)
    // .patch('/:id', VehicleController.updateById)
    .delete('/:id', VehicleController.deleteById)
module.exports = router;