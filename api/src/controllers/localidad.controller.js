let _localidadService = null;

class LocalidadController {
    constructor({ LocalidadService }) {
        _localidadService = LocalidadService;
    }
    // get
    async get(req, res) {
        const { localidadId } = req.params;
        const localidad = await _localidadService.get(localidadId);
        return res.send(localidad);
    }

    // getAll
    async getAll(req, res) {
        const localidades = await _localidadService.getAll();
        return res.send(localidades);
    }

    // create
    async create(req, res) {
        const { body } = req;
        const createdLocalidad = await _localidadService.create(body);
        return res.send(createdLocalidad);
    }

    // update
    async update(req, res) {
        const { body } = req;
        const {localidadId } = req.params;
        const updatedLocalidad = await _localidadService.update(localidadId, body);
        return res.send(updatedLocalidad);
    }
    // delete
    async delete(req, res) {
        const { localidadId } = req.params;
        const deletedLocalidad = await _localidadService.delete(localidadId);
        return res.send(deletedLocalidad);

    }
}

module.exports = LocalidadController;