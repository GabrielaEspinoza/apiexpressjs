const BaseService = require('./base.service')
let _localidadRepository = null;

class LocalidadService extends BaseService {
    constructor({ LocalidadRepository }) {
        super(LocalidadRepository);
        _localidadRepository = LocalidadRepository;
    }
    async getLocalidadByLocalidadName(localidadname) {
        return await _localidadRepository.getLocalidadByLocalidadName(localidadname);
    }
}

module.exports = LocalidadService;