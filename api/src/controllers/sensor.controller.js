let _sensorService = null;

class SensorController {
    constructor({ SensorService }) {
        _sensorService = SensorService;
    }
    // get
    async get(req, res) {
        const { sensorId } = req.params;
        const sensor = await _sensorService.get(sensorId);
        return res.send(sensor);
    }

    // getAll
    async getAll(req, res) {
        const sensors = await _sensorService.getAll();
        return res.send(sensors);
    }

    // create
    async create(req, res) {
        const { body } = req;
        const createdSensor = await _sensorService.create(body);
        return res.send(createdSensor);
    }

    // update
    async update(req, res) {
        const { body } = req;
        const { sensorId } = req.params;
        const updatedSensor = await _sensorService.update(sensorId, body);
        return res.send(updatedSensor);
    }

    // delete
    async delete(req, res) {
        const { sensorId } = req.params;
        const deletedSensor = await _sensorService.delete(sensorId);
        return res.send(deletedSensor);

    }
}

module.exports = SensorController;