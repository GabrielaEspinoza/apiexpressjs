const BaseService = require('./base.service')
let _sensorRepository = null;

class SensorService extends BaseService {
    constructor({ SensorRepository }) {
        super(SensorRepository);
        _sensorRepository = SensorRepository;
    }
    async getSensorBySensorName(sensorname) {
        return await _sensorRepository.getSensorBySensorName(sensorname);
    }
}

module.exports = SensorService;