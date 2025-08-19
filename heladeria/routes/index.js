require('dotenv').config()
console

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'adios' });
});

app.get('/info', (req, res) => {
  res.send('Esta es una request de GET')
})

app.post('/', (req, res) => {
  res.send('Esto es una POST request')
})

app.put('/user', (req, res) => {
  res.send('Esto es una PUT request en user')
})

app.delete('/user', (req, res) => {
  res.send('Esto es una DELETE request en user')
})


module.exports = router;
