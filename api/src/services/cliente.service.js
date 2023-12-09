const BaseService = require('./base.service')
let _clienteRepository = null;

class ClienteService extends BaseService {
    constructor({ ClienteRepository }) {
        super(ClienteRepository);
        _clienteRepository = ClienteRepository;
    }
    async getClienteByClienteName(clientename) {
        return await _clienteRepository.getClienteByClienteName(clientename);
    }
}

module.exports = ClienteService;