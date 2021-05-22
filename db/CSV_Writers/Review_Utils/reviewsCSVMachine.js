const { packages: { colors, path, performance, fs }, logs: { log, logBatchUpdates, logPerformanceMetrics, logVictoryMessage }, utils: {batchGenerator: reviewBatchGenerator, dBQuery: reviewDBQuery}, _reviewsBigBatchNumber } = require('../config/config.js');

const start = performance.now();

log('Starting time stamp (Top of file)--> \n\n' + new Date(Date.now()).toString().blue);

module.exports = async () => {
  try {
    log(`Reviews Table Populating`.green);
    let perfArr = [];
    await [...new Array(_reviewsBigBatchNumber)].reduce(async (count) => {
      count = await count;
      const start = performance.now();
      logBatchUpdates(count, _reviewsBigBatchNumber, 'Reviews');
      await reviewBatchGenerator();
      await reviewDBQuery('reviews');
      perfArr = logPerformanceMetrics(start, performance.now(), _reviewsBigBatchNumber, perfArr).slice();
      return count += 1;
    }, 0);
    log('Reviews Table Populated');
    log('Ending timestamp (Bottom of file)--> ' + new Date(Date.now()).toString());
    process.exit(1)
  } catch (err) {
    log(err.message);
  }
};