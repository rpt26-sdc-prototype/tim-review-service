const express = require('express');
var cors = require('cors');
const app = express();
const model = require('../db/model.js');
var morgan = require('morgan');
var path = require('path');
// const AddReview = require('../db/controllers.js').test;
// const AddUser = require('../db/controllers.js').userTest;
const getReviews = require('../db/controllers.js').getGameReviews;
const CRUDRouter = require('./CRUDRoutes.js');

app.use(morgan('dev'));
app.use(cors());

app.use(express.static('./public'));

app.use(/(singleReview)?/, CRUDRouter);

app.get('/reviews/:gameID', async (req, res) => {
  const { gameID } = req.params;
  // if (gameID > 0 && gameID <= 100) {
    // model.read(gameID, (error, data) => {
    //   if (error) { console.log(error); }
    //   res.send(data);
    // });
    try {
      const reviews = await getReviews(gameID);
      res.send(reviews);
    } catch (err) {
      res.send(err);
    }
  // }
  // else {
  //   res.status(404).send('Invalid GameID');
  // }
});

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = app;