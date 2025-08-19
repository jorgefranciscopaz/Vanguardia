require('dotenv').config()
console

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'adios' });
});

router.get('/info', (req, res) => {
  res.send('Esta es una request de GET')
})

router.post('/nuevo', (req, res) => {
  res.send('Esto es una POST request')
})

router.put('/hola', (req, res) => {
  res.send('Esto es una PUT request en user')
})

router.delete('/adios', (req, res) => {
  res.send('Esto es una DELETE request en user')
})


module.exports = router;
