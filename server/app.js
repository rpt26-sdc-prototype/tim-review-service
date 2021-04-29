const express = require('express');
var cors = require('cors');
const app = express();
const model = require('../db/model.js');
var morgan = require('morgan');
var path = require('path');
const AddReview = require('../db/controllers.js').test;
const AddUser = require('../db/controllers.js').userTest;
const getReviews = require('../db/controllers.js').getGameReviews;

app.use(morgan('dev'));
app.use(cors());

app.use(express.static('./public'));

app.get('/reviews/:gameID', async (req, res) => {
  const { gameID } = req.params;
  if (gameID > 0 && gameID <= 100) {
    try {
      const reviews = await getReviews(gameID);
      res.send(reviews);
    } catch(err) {
      res.send(err);
    }
  }
});

app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id > 0 && id <= 100) {
    await model.delete(id)
  }
  res.send('ok')

})

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = app;