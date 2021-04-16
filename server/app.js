const express = require('express');
var cors = require('cors');
const app = express();
const model = require('../db/model.js');
var morgan = require('morgan');
var path = require('path');

app.use(morgan('dev'));
app.use(cors());

app.use(express.static('./public'));

app.get('/hi', (req, res) => {
  res.send('Hello World!');
});

app.get('/reviews/:id', (req, res) => {
  console.log(req.params.id);
  if ((req.params.id > 0) && (req.params.id < 101)) {

    model.read(req.params.id, (error, data) => {
      if (error) { console.log(error); }
      console.log(`the length of the array is ${data.length}`);
      res.send(data);
    });
  } else {
    res.status(404).send('Invalid GameID');
  }
});

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = app;