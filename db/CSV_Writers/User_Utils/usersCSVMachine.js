const { packages: { performance, colors, fs }, logs: { log, logBatchUpdates, logPerformanceMetrics, logVictoryMessage }, utils: { dBQuery: userDBQuery, insertionArrGeneration, batchGenerator: userBatchGenerator }, _usersBigBatchNumber, _usersArrayCopiesNumber } = require('../config/config.js');

const userFileStartTime = performance.now();
log('Starting time stamp (Top of file)--> \n\n' + new Date(Date.now()).toString().blue);

module.exports = async () => {
  try {
    log('\nUsers Table Populating\n'.green);
    let perfArr = [];
    const insertionArr = insertionArrGeneration(_usersArrayCopiesNumber);
    await [...new Array(_usersBigBatchNumber)].reduce(async (count, bigBatch) => {
      count = await count;
      const start = performance.now();
      logBatchUpdates(count, _usersBigBatchNumber, 'User');
      await userBatchGenerator(insertionArr);
      await userDBQuery('users');
      perfArr = logPerformanceMetrics(start, performance.now(), _usersBigBatchNumber, perfArr).slice();
      return count += 1;
    }, 0);
    process.exit(1)
  } catch (err) {
    log(err.message);
    process.exit(1);
  }
}