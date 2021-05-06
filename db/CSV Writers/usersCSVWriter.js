// For increasing max_packet_size ->
// https://stackoverflow.com/questions/93128/mysql-error-1153-got-a-packet-bigger-than-max-allowed-packet-bytes/104176#104176
const { performance } = require('perf_hooks');
const userFileStartTime = performance.now();
const colors = require('colors');

console.log('Starting time stamp (Top of file)--> \n\n' + new Date(Date.now()).toString().blue);
const PromiseX = require('bluebird');
const fs = require('fs');
const Sequelize = require('sequelize');
const sequelize = require('../config.js');
const { generateInBetweenSync, twoValProb, threeValProb } = require('./utils/data_functions/randomMathGeneration');
const { smallBatchUpdates, logPerformanceMetrics } = require('./utils/loggers');
const { randomString } = require('./utils/data_functions/randomUsernameGeneration.js');

const { primaryRecordNumber, usersBigBatchLimiter, usersSmallBatchLimiter, _usersRecordsNumber, _usersBigBatchNumber, _usersSmallBatchNumber, _usersArrayCopiesNumber } = require('./config/config.js');
require('./utils/functions/insertionArrGeneration')(_usersArrayCopiesNumber);

// Users...
(async () => {
  try {
    console.log('\nUsers Table Populating\n'.green);
    let { perfArr, avgPerformance, userX, tableCount } = { perfArr: [], avgPerformance: undefined, userX: 'users', tableCount: 0 };
    await PromiseX.each([...new Array(_usersBigBatchNumber)], async (bigBatch, dex, arrayLength) => {
      if ((perfArr.length / 3) % 1 === 0) {
        tableCount++;
        console.log(`Creating new User table: ${tableCount}`);
        await database.sequelize.query(`CREATE TABLE ${`user${tableCount}`}(
          ID INT NOT NULL AUTO_INCREMENT,
          userName varchar(50) UNIQUE NOT NULL,
          profilePicture varchar(255),
          userTheme INTEGER,
          steamLevel INTEGER,
          reviewsGiven INTEGER,
          playtime INTEGER,
          productActivation INTEGER,
          gamesOwned INTEGER,
          PRIMARY KEY (ID))`);
        userX = `user${tableCount}`;
      }
      const start = performance.now();
      console.log(`<--- User Big Batch ${(dex + 1)}/${_usersBigBatchNumber}--->`.yellow);
      // Small Batch...
      let oneMillionRecordsStr = '';
      for (let i = 0; i < _usersSmallBatchNumber; i++) {
        smallBatchUpdates(i);
        const insertionArr = fs.readFileSync('./Read_Write_Files/twentyFiveKProfileLinks.txt').toString().split('\n');
        oneMillionRecordsStr += insertionArr.map(link => {
          if (link === '') {
            // this is a bug, there should be no empty links, but this patches it for now.
            link = 'https://gifbucket.s3.us-west-1.amazonaws.com/xi62j6whz4831.jpg'
          }
          return `(${"'" + randomString(18) + "'"},${"'" + link + "'"},${generateInBetweenSync(10)},${generateInBetweenSync(100)},${generateInBetweenSync(20)},${generateInBetweenSync(125)},${generateInBetweenSync(80)},${generateInBetweenSync(2)})`
        }).join('\n') + '\n'
      }
      // Remove the last \n from the string...
      oneMillionRecordsStr = oneMillionRecordsStr.trim('');
      oneMillionRecordsStr = oneMillionRecordsStr.split('\n').toString()
      fs.writeFileSync(`${__dirname}/Read_Write_Files/oneMillionRecordsStr.csv`, oneMillionRecordsStr);
      // const entryValues = fs.readFileSync(`${__dirname}/Read_Write_Files/oneMillionRecordsStr.csv`).toString().split('\n');

      await database.sequelize.query(`INSERT INTO ${userX}(userName, profilePicture, userTheme,steamLevel, reviewsGiven, gamesOwned, playTime, productActivation) VALUES ${oneMillionRecordsStr}`)

      // Performance Metrics...
      perfArr = logPerformanceMetrics(start, performance.now(), _usersBigBatchNumber, perfArr).slice();
    })
    console.log(' \n Users Table Populated \n ');
    console.log('Ending timestamp (Bottom of file)--> ' + new Date(Date.now()).toString());
    process.exit(1)
  } catch (err) {
    console.log(err.message);
  }
})()