let _comboService = null;

class ComboController {
    constructor({ ComboService }) {
        _comboService = ComboService;
    }
    // get
    async get(req, res) {
        const { comboId } = req.params;
        const combo = await _comboService.get(comboId);
        return res.send(combo);
    }

    // getAll
    async getAll(req, res) {
        const combos = await _comboService.getAll();
        return res.send(combos);
    }

    // create
    async create(req, res) {
        const { body } = req;
        const createdCombo = await _comboService.create(body);
        return res.send(createdCombo);
    }

    // update
    async update(req, res) {
        const { body } = req;
        const { comboId } = req.params;
        const updatedCombo = await _comboService.update(comboId, body);
        return res.send(updatedCombo);
    }

    // delete
    async delete(req, res) {
        const { comboId } = req.params;
        const deletedCombo = await _comboService.delete(comboId);
        return res.send(deletedCombo);

    }
}

module.exports = ComboController;