// For increasing max_packet_size ->
// https://stackoverflow.com/questions/93128/mysql-error-1153-got-a-packet-bigger-than-max-allowed-packet-bytes/104176#104176
const { performance } = require('perf_hooks');
const userFileStartTime = performance.now();
const colors = require('colors');
console.log('Starting time stamp (Top of file)--> \n\n' + new Date(Date.now()).toString().blue);

const path = require('path')
const Promise = require('bluebird');
const db = Promise.promisifyAll(require(path.resolve('../index.js')));

const fs = require('fs');
const Sequelize = require('sequelize');
const sequelize = require('../config.js');
const { logSmallBatchUpdates, logBigBatchUpdates, logPerformanceMetrics, logVictoryMessage } = require('./utils/loggers');
const { _usersBigBatchNumber, _usersSmallBatchNumber, _usersArrayCopiesNumber } = require('./config/config.js');

const userDBQuery = require('./utils/functions/userDBQuery.js');
const smallBatchGenerator = require('./utils/functions/usersSmallBatchGenerator.js');
const generateNewUserTable = require('./utils/functions/userTableGenerator.js');
// This calls the function that generates the 25k insertionArr from the list of 250 profile links.
require('./utils/functions/insertionArrGeneration')(_usersArrayCopiesNumber);

// Users...
(async () => {
  // await database.sequelize.query('SET autocommit=0;');
  // await database.sequelize.query('SET unique_checks=0;');
  // await database.sequelize.query('SET foreign_key_checks=0;');
  try {
    console.log('\nUsers Table Populating\n'.green);
    let { perfArr, userX, tableCount } = { perfArr: [], userX: 'users', tableCount: 0 };
    // Sequential Processing
    await Promise.each([...new Array(_usersBigBatchNumber)], async (bigBatch, bigIndex) => {
      // Every Three Insertions, make a new table, returns same values otherwise.
      [tableCount, userX] = await generateNewUserTable(tableCount, perfArr);
      const start = performance.now();
      logBigBatchUpdates(bigIndex, _usersBigBatchNumber);
      // Generate 1 Million Records
      smallBatchGenerator(_usersSmallBatchNumber, logSmallBatchUpdates, bigIndex);
      // And Insert into DB
      await userDBQuery(userX);
      // Log Performance Metrics...
      perfArr = logPerformanceMetrics(start, performance.now(), _usersBigBatchNumber, perfArr).slice();
    });
    logVictoryMessage();
    // await database.sequelize.query('COMMIT;')
    // await database.sequelize.query('SET unique_checks=1;')
    // await database.sequelize.query('SET foreign_key_checks=1');
    process.exit(1)
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
})()