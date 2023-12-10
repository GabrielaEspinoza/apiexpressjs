const BaseRepository = require('./base.repository');
let _sensor= null;

class SensorRepository extends BaseRepository {
    constructor({Sensor}){
        super(Sensor);
        _sensor = Sensor
    }
    async getSensorBySensorName(sensorname){
        return await _sensor.findOne({sensorname});
    }
}

module.exports = SensorRepository;