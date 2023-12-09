const { Router } = require('express');

module.exports = function ({ ComboController }) {
    const router = Router();
    router.get('/:comboId', ComboController.get);
    router.get('', ComboController.getAll);
    router.post('/', ComboController.create);
    router.patch('/:comboId', ComboController.update);
    router.delete('/:comboId', ComboController.delete);

    return router;
}
