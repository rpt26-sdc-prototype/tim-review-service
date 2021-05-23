require('dotenv').config({ path: require('path').resolve('../../.env') });
const { Client } = require('pg');
module.exports = new Client();