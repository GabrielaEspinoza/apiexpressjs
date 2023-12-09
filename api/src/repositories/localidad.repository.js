const BaseRepository = require('./base.repository');
let _localidad= null;

class LocalidadRepository extends BaseRepository {
    constructor({Localidad}){
        super(Localidad);
        _localidad = Localidad
    }
    async getLocalidadByBebidaName(localidadname){
        return await _localidad.findOne({localidadname});
    }
}

module.exports = LocalidadRepository;