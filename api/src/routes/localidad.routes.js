const { Router } = require('express');

module.exports = function ({ LocalidadController }) {
    const router = Router();
    router.get('/:localidadId', LocalidadController.get);
    router.get('', LocalidadController.getAll);
    router.post('/', LocalidadController.create);
    router.patch('/:localidadId', LocalidadController.update);
    router.delete('/:localidadId', LocalidadController.delete);

    return router;
}
