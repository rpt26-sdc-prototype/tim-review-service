const { colors, path, performance } = require('../packages.js');
const start = performance.now();
console.log('Starting time stamp (Top of file)--> \n\n' + new Date(Date.now()).toString().blue);

const { _reviewsBigBatchNumber } = require('../config/config.js');
const { reviewBatchGenerator, reviewDBQuery } = require('./reviewFunctions.js');
const { logBatchUpdates, logPerformanceMetrics, logVictoryMessage } = require('../utils/loggers.js');

module.exports = async () => {
  // Reviews...
  try {
    console.log(`Reviews Table Populating`.green);
    let perfArr = [];
    // Reviews Big Batches
    await [...new Array(_reviewsBigBatchNumber)].reduce(async (count) => {
      count = await count;
      const reviewsStartPerf = performance.now();
      logBatchUpdates(count, _reviewsBigBatchNumber, 'Reviews');
      await reviewBatchGenerator();
      await reviewDBQuery();
      perfArr = logPerformanceMetrics(start, performance.now(), _reviewsBigBatchNumber, perfArr).slice();
      return count += 1;
    }, 0);

    console.log('Reviews Table Populated');
    console.log('Ending timestamp (Bottom of file)--> ' + new Date(Date.now()).toString());
    process.exit(1)
  } catch (err) {
    console.log(err.message);
  }
};