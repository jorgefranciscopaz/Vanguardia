var router = require('express').Router();

const heladoController = require('../controllers/helado');

router.get('/:main', heladoController.getMain);

module.exports = router;
