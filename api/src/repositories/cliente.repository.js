const BaseRepository = require('./base.repository');
let _cliente= null;

class ClienteRepository extends BaseRepository {
    constructor({Cliente}){
        super(Cliente);
        _cliente = Cliente
    }
    async getClienteByClienteName(clientename){
        return await _cliente.findOne({clientename});
    }
}

module.exports = ClienteRepository;