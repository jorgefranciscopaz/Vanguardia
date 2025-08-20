require('dotenv').config()


var express = require('express');
var router = express.Router();
const ind = require('../controllers/indexController');

require('dotenv').config();

router.get('/nuevo', ind.getNuevo);
router.get('/:main', ind.getMain);

module.exports = router;
