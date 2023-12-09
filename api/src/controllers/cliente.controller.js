let _clienteService = null;

class ClienteController {
    constructor({ ClienteService }) {
        _clienteService = ClienteService;
    }
    // get
    async get(req, res) {
        const { clienteId } = req.params;
        const cliente = await _clienteService.get(clienteId);
        return res.send(cliente);
    }

    // getAll
    async getAll(req, res) {
        const clientes = await _clienteService.getAll();
        return res.send(clientes);
    }

    // create
    async create(req, res) {
        const { body } = req;
        const createdCliente = await _clienteService.create(body);
        return res.send(createdCliente);
    }

    // update
    async update(req, res) {
        const { body } = req;
        const { clienteId } = req.params;
        const updatedCliente = await _clienteService.update(clienteId, body);
        return res.send(updatedCliente);
    }

    // delete
    async delete(req, res) {
        const { clienteId } = req.params;
        const deletedCliente = await _clienteService.delete(clienteId);
        return res.send(deletedCliente);

    }
}

module.exports = ClienteController;