const { Promise, path, fs } = require('../packages.js');
const { twoValProb, threeValProb, generateInBetweenSync } = require('../utils/randomMathGeneration');
const { primaryRecordNumber, reviewsBigBatchLimiter, _usersRecordsNumber } = require('../config/config.js');

const reviewTableKeys = ["game", "userID", "reviewText", "creationDate", "recommended", "helpfulCount", "notHelpfulCount", "helpfulScore", "funnyCount", "earlyAccess", "awards", "comments"].join(",");

mE = module.exports = {
  paragraphGetter: (numOfPs, paragraphs) => {
    return [...new Array(numOfPs)].map(num => paragraphs[generateInBetweenSync(1000)]).join('');
  },

  reviewBatchGenerator: async () => {
    const paragraphs = require('../Read_Write_Files/reviews.json');
    const bigBatchStr = [...new Array(reviewsBigBatchLimiter)].reduce((str) => {
      const helpfulCount = generateInBetweenSync(100);
      const notHelpfulCount = generateInBetweenSync(10);
      const creationDate = (1616535988000 - (generateInBetweenSync(31536000000)));
      const helpfulScore = helpfulCount / (helpfulCount + notHelpfulCount) * 100;
      return str += `a,${generateInBetweenSync(primaryRecordNumber)},${generateInBetweenSync(_usersRecordsNumber)},${mE.paragraphGetter(generateInBetweenSync(1), paragraphs)},${creationDate},${twoValProb(.15)},${helpfulCount},${notHelpfulCount},${helpfulScore},${threeValProb(.7, .8)},${threeValProb(.7, .9)},${twoValProb(.9)},${generateInBetweenSync(20)}\r\n`;
    }, '');
    fs.writeFileSync("Read_Write_Files/oneMillionReviews.csv", `${reviewTableKeys}\r\n${bigBatchStr}`);
  },

  reviewDBQuery: () => {
    const db = Promise.promisifyAll(require('../../../db'));
    return new Promise((resolve, reject) => {
      db.query(
        `LOAD DATA LOCAL INFILE 'Read_Write_Files/oneMillionReviews.csv'
        INTO TABLE reviews
        FIELDS TERMINATED BY ','
        ENCLOSED BY '"'
        LINES TERMINATED BY '\n'
        IGNORE 1 ROWS;`
        , (err, result) => {
          if (err) {
            console.log(err);
            return reject("db", `${err.message}`);
          }
          resolve();
        })
    })
  },
};

// Notes for Journal
// Changing from Promise.each to arr.reduce for reviews small batch generation reduced insertion time of 1 million records from 36.95 seconds to 14.49 seconds.