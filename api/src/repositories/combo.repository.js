const BaseRepository = require('./base.repository');
let _combo= null;

class ComboRepository extends BaseRepository {
    constructor({Combo}){
        super(Combo);
        _combo = Combo
    }
    async getComboByComboName(comboname){
        return await _combo.findOne({comboname});
    }
}

module.exports = ComboRepository;