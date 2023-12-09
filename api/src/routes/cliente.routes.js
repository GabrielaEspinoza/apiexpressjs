const { Router } = require('express');

module.exports = function ({ ClienteController }) {
    const router = Router();
    router.get('/:clienteId', ClienteController.get);
    router.get('', ClienteController.getAll);
    router.post('/', ClienteController.create);
    router.patch('/:clienteId', ClienteController.update);
    router.delete('/:clienteId', ClienteController.delete);

    return router;
}
