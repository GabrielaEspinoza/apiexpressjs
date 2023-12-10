const { Router } = require('express');

module.exports = function ({ SensorController }) {
    const router = Router();
    router.get('/:sensorId', SensorController.get);
    router.get('', SensorController.getAll);
    router.post('/', SensorController.create);
    router.patch('/:sensorId', SensorController.update);
    router.delete('/:sensorId', SensorController.delete);

    return router;
}
