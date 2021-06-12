require('newrelic');
require('dotenv').config()

const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());

server.use(express.static(require('path').resolve('../public')));

server.get('/:id', (req, res) => {
  res.sendFile(require('path').resolve('../public/index.html'));
});

server.listen(process.env.PORT, () => {
  console.log(`Main Server listening on port ${process.env.PORT}`);
});
