const { performance } = require('perf_hooks');
const start = performance.now();
const colors = require('colors');
console.log('Starting time stamp (Top of file)--> \n\n' + new Date(Date.now()).toString().blue);

const fs = require('fs');
const Promise = require('bluebird');
const Sequelize = require('sequelize');
const sequelize = require('../config.js');
const { generateInBetweenSync, twoValProb, threeValProb } = require('./utils/data_functions/randomMathGeneration');

const { primaryRecordNumber, reviewsBigBatchLimiter, reviewsSmallBatchLimiter, _reviewsRecordsNumber, _usersRecordsNumber, _reviewsBigBatchNumber, _reviewsSmallBatchNumber } = require('./config/config.js');
const { logSmallBatchUpdates, logBigBatchUpdates, logPerformanceMetrics } = require('./utils/loggers.js');
const generateNewReviewTable = require('./utils/functions/reviewTableGenerator.js');
const smallBatchGenerator = require('./utils/functions/reviewsSmallBatchGenerator.js');
const reviewDBQuery = require('./utils/functions/reviewDBQuery.js');

(async () => {
  // Reviews...
  try {
    console.log(`Reviews Table Populating`.green);
    let { perfArr, reviewsX, tableCount } = { perfArr: [], reviewsX: 'reviews', tableCount: 0 };
    // Reviews Big Batches
    await Promise.each([...new Array(_reviewsBigBatchNumber)], async (bigBatch, dex, arrayLength) => {
      [tableCount, reviewsX] = await generateNewReviewTable(tableCount, perfArr);
      const reviewsStartPerf = performance.now();
      logBigBatchUpdates(dex, _reviewsBigBatchNumber);
      // Generate Large Batch of (25k x 40) Records
      smallBatchGenerator(logSmallBatchUpdates);
      //And Insert into Database
      await reviewDBQuery(reviewsX);
      // Performance Metrics...
      perfArr = logPerformanceMetrics(start, performance.now(), _reviewsBigBatchNumber, perfArr).slice();
    })
    console.log('Reviews Table Populated');
    console.log('Ending timestamp (Bottom of file)--> ' + new Date(Date.now()).toString());
    process.exit(1)
  } catch (err) {
    console.log(err.message);
  }
})()