const BaseService = require('./base.service')
let _comboRepository = null;

class ComboService extends BaseService {
    constructor({ ComboRepository }) {
        super(ComboRepository);
        _comboRepository = ComboRepository;
    }
    async getComboByComboName(comboname) {
        return await _comboRepository.getComboByComboName(comboname);
    }
}

module.exports = ComboService;