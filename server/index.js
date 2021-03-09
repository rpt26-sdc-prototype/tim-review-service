const express = require('express');
const app = express();
const model = require('../db/model.js');
const port = 3001;
var morgan = require('morgan');
var path = require('path');

app.use(morgan('dev'));

app.use(express.static('./public'));

app.get('/hi', (req, res) => {
  res.send('Hello World!');
});

app.get('/reviews/:id', (req, res) => {
  console.log(req.params.id);
  model.read(req.params.id, (error, data) => {
    if (error) { console.log(error); }
    console.log(`the length of the array is ${data.length}`);
    res.send(data);
  });
});

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});