const fs = require('fs');
const path = require('path');
const PromiseX = require('bluebird');
const { lorem } = require(path.resolve('utils/data_functions/randomWordGeneration'));

const txtgen = require('txtgen');

const { generateInBetweenSync, twoValProb, threeValProb } = require
  (path.resolve('utils/data_functions/randomMathGeneration'));

const { primaryRecordNumber, _reviewsSmallBatchNumber, reviewsSmallBatchLimiter, _usersRecordsNumber } = require(path.resolve('./config/config.js'));
const reviewTableKeys = ["game", "userID", "reviewText", "creationDate", "recommended", "helpfulCount", "notHelpfulCount", "helpfulScore", "funnyCount", "earlyAccess", "awards", "comments"].join(",") + "\r\n";


module.exports = async (logSmallBatchUpdates) => {
  fs.writeFileSync(path.resolve("Read_Write_Files/oneMillionReviews.csv"), reviewTableKeys);

  // const stream = fs.createWriteStream(path.resolve("Read_Write_Files/oneMillionReviews.csv"), { flags: 'a' });

  for (let i = 0; i < _reviewsSmallBatchNumber; i++) {
    logSmallBatchUpdates(i);
    // await PromiseX.each([...new Array(reviewsSmallBatchLimiter)], async (smallBatch, smallDex, smallArrLength) => {
    let twentyFiveKStr = '';
    await PromiseX.each([...new Array(1)], async (x, index, arrLength) => {
    // ([...new Array(25)]).forEach(async (x, index, arr) => {
      // const helpfulCount = generateInBetweenSync(100);
      // const notHelpfulCount = generateInBetweenSync(10);
      // const creationDate = (1616535988000 - (generateInBetweenSync(31536000000)));
      // const helpfulScore = helpfulCount / (helpfulCount + notHelpfulCount) * 100;
      // let texts = txtgen.paragraph(4);
      // lorem.generateParagraphs(generateInBetweenSync(1))
      // twentyFiveKStr += `a,${generateInBetweenSync(primaryRecordNumber)},${generateInBetweenSync(_usersRecordsNumber)},${"'" + x+ "'"},${creationDate},${twoValProb(.15)},${helpfulCount},${notHelpfulCount},${helpfulScore},${threeValProb(.7, .8)},${threeValProb(.7, .9)},${twoValProb(.9)},${generateInBetweenSync(20)}\r\n`;

      let entry = ((index + (arrLength * i)) +  ": '" + lorem.generateParagraphs(generateInBetweenSync(1)) + "',");
      // console.log(entry);
      // stream.write(entry);
      twentyFiveKStr += entry;
      (async function() {
        await new Promise((resolve, reject) => {
          stream.write(twentyFiveKStr);
          resolve();
        });
      }());

    })
    // stream.write(twentyFiveKStr)
    // twentyFiveKStr = '';
  }
  stream.write("}")
  stream.end();
  process.exit(1)
};

// const test = async () => {

// }

