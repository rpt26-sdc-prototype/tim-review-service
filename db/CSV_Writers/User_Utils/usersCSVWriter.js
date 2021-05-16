const { performance, colors, Promise, fs } = require('../packages.js');
const userFileStartTime = performance.now();
console.log('Starting time stamp (Top of file)--> \n\n' + new Date(Date.now()).toString().blue);

const { userDBQuery, userBatchGenerator, insertionArrGeneration } = require('./userFunctions.js');
const { logBatchUpdates, logPerformanceMetrics, logVictoryMessage } = require('../utils/loggers');
const { _usersBigBatchNumber, _usersArrayCopiesNumber } = require('../config/config.js');

module.exports = async () => {
  try {
    console.log('\nUsers Table Populating\n'.green);
    let perfArr = [];
    const insertionArr = insertionArrGeneration(_usersArrayCopiesNumber);
    await [...new Array(_usersBigBatchNumber)].reduce(async (count, bigBatch) => {
      count = await count;
      const start = performance.now();
      logBatchUpdates(count, _usersBigBatchNumber, 'User');
      await userBatchGenerator(insertionArr);
      await userDBQuery();
      perfArr = logPerformanceMetrics(start, performance.now(), _usersBigBatchNumber, perfArr).slice();
      return count += 1;
    }, 0);
    process.exit(1)
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}