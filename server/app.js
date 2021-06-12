require('newrelic');

const express = require('express');
const cors = require('cors');
const app = express();
const CRUDRouter = require('./CRUDRoutes.js');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());


app.use(/(reviews)?/, CRUDRouter);

app.listen(process.env.PORT, () => {
  console.log(`App is listening at ${process.env.PORT}`);
});