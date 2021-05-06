// For increasing max_packet_size ->
// https://stackoverflow.com/questions/93128/mysql-error-1153-got-a-packet-bigger-than-max-allowed-packet-bytes/104176#104176
// const UsernameGenerator = require('username-generator');
const { performance } = require('perf_hooks');
const start = performance.now();

const colors = require('colors');
console.log('Starting time stamp (Top of file)--> \n\n' + new Date(Date.now()).toString().blue);

const fs = require('fs');
const PromiseX = require('bluebird');
const Sequelize = require('sequelize');
const sequelize = require('../config.js');
const { lorem } = require('./utils/data_functions/randomWordGeneration');
const { generateInBetweenSync, twoValProb, threeValProb } = require('./utils/data_functions/randomMathGeneration');

const { primaryRecordNumber, reviewsBigBatchLimiter, reviewsSmallBatchLimiter, _reviewsRecordsNumber, _usersRecordsNumber, _reviewsBigBatchNumber, _reviewsSmallBatchNumber } = require('./config/config.js');
const { smallBatchUpdates, logPerformanceMetrics } = require('./utils/loggers.js');

(async () => {
  const { Review } = sequelize.models;
  // Reviews...
  try {
    console.log(`Reviews Table Populating`.green);
    let { perfArr, avgPerf, reviewsX, tableCount } = { perfArr: [], avgPerf: undefined, reviewsX: 'reviews', tableCount: 0 };
    // Reviews Big Batches
    await PromiseX.each([...new Array(_reviewsBigBatchNumber)], async (bigBatch, dex, arrayLength) => {
      if ((perfArr.length / 3) % 1 === 0) {
        tableCount++;
        console.log('Creating new Reviews table: ' + tableCount);
        await database.sequelize.query(`CREATE TABLE ${`reviews${tableCount}`} (
          ID INT NOT NULL AUTO_INCREMENT,
          game INT,
          userID INT,
          reviewText VARCHAR(8000),
          creationDate BIGINT,
          recommended INTEGER,
          helpfulCount INTEGER,
          notHelpfulCount INTEGER,
          helpfulScore INTEGER,
          funnyCount INTEGER,
          earlyAccess INTEGER,
          awards INTEGER,
          comments INTEGER,
          PRIMARY KEY (ID)
        );`)
        // FOREIGN KEY (userID) REFERENCES users(ID)
        reviewsX = `reviews${tableCount}`;
      };

      const reviewsStartPerf = performance.now();
      console.log(`<--- Reviews Big Batch ${(dex + 1)}/${_reviewsBigBatchNumber}--->`.yellow);
      // Small Batch...
      // let oneMillionReviewsStr = '';
      console.log(`Building Review Value Insertion String...`);
      fs.writeFileSync("oneMillionReviews.txt", '');
      const test = fs.readFileSync('oneMillionReviews.txt').toString();
      console.log(test);
      const stream = fs.createWriteStream("oneMillionReviews.txt", { flags: 'a' });

      for (let i = 0; i < 40; i++) {
        smallBatchUpdates(i);
        await PromiseX.each([...new Array(reviewsSmallBatchLimiter)], async (smallBatch, smallDex, smallArrLength) => {
          // ([...new Array(reviewsSmallBatchLimiter)]).forEach(async (x, index) => {
          const helpfulCount = generateInBetweenSync(100);
          const notHelpfulCount = generateInBetweenSync(10);
          const creationDate = (1616535988000 - (generateInBetweenSync(31536000000)));
          const helpfulScore = helpfulCount / (helpfulCount + notHelpfulCount) * 100;
          // console.log(dex, (arrayLength - 1), smallDex, smallArrLength - 1)
          if (i === 39 && (smallDex === (smallArrLength - 1))) {
            await stream.write(`(${generateInBetweenSync(primaryRecordNumber)},${generateInBetweenSync(_usersRecordsNumber)},${("'" + lorem.generateParagraphs(generateInBetweenSync(1)) + "'")},${creationDate},${twoValProb(.15)},${helpfulCount},${notHelpfulCount},${helpfulScore},${threeValProb(.7, .8)},${threeValProb(.7, .9)},${twoValProb(.9)},${generateInBetweenSync(20)})`)
          } else {
            await stream.write(`(${generateInBetweenSync(primaryRecordNumber)},${generateInBetweenSync(_usersRecordsNumber)},${("'" + lorem.generateParagraphs(generateInBetweenSync(1)) + "'")},${creationDate},${twoValProb(.15)},${helpfulCount},${notHelpfulCount},${helpfulScore},${threeValProb(.7, .8)},${threeValProb(.7, .9)},${twoValProb(.9)},${generateInBetweenSync(20)}),`)
          }
        })
      }
      stream.end();
      let reviewsEntryValues = fs.readFileSync(`${__dirname}/oneMillionReviews.txt`);
      await database.sequelize.query(`INSERT INTO ${reviewsX}(game, userID, reviewText, creationDate, recommended, helpfulCount, notHelpfulCount, helpfulScore, funnyCount, comments, earlyAccess, awards) VALUES ${reviewsEntryValues}`);

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