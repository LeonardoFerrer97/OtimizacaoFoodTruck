const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.json())

const otimizar = require('./src/Otimizar');
app.post('/otimizar', function (req, res) {
  res.send((otimizar.otimizar(req.body)));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Server listening!');
});