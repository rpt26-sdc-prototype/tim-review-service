const { primaryRecordNumber, _usersRecordsNumber, reviewsBigBatchLimiter, userTableKeys, reviewTableKeys, random: { generateInBetweenSync: gIBS, randomString: rS, twoValProb: tVP, threeValProb: rEVP }, logs: { log }, packages: { fs, Promise, path } } = require('../config/config.js');

mE = module.exports = {
  insertionArrGeneration: (_usersArrayCopiesNumber) => {
    const linkArray = fs.readFileSync(`Read_Write_Files/_twoHundredFiftyProfileLinks.txt`).toString().split('\n');
    return [...new Array(_usersArrayCopiesNumber)].map(() => linkArray).flat().filter(link => link.length > 0);
  },

  paragraphGetter: (numOfPs, paragraphs) => {
    return [...new Array(numOfPs)].map(num => paragraphs[gIBS(1000)]).join('');
  },

  reviewTemplate: (helpfulCount, notHelpfulCount, creationDate, helpfulScore, paragraphs) => `a,${gIBS(primaryRecordNumber)},${gIBS(_usersRecordsNumber)},${mE.paragraphGetter(gIBS(1), paragraphs)},${creationDate},${tVP(.15)},${helpfulCount},${notHelpfulCount},${helpfulScore},${rEVP(.7, .8)},${rEVP(.7, .9)},${tVP(.9)},${gIBS(20)}` + `\r\n`,

  userTemplate: (link) => `a,${"'" + rS(18) + "'"},${"'" + link + "'"},${gIBS(10)},${gIBS(100)},${gIBS(20)},${gIBS(125)},${gIBS(80)},${gIBS(2)}` + '\r\n',

  reviewHelper: () => {
    const helpfulCount = gIBS(100);
    const notHelpfulCount = gIBS(10);
    const creationDate = (1616535988000 - (gIBS(31536000000)));
    const helpfulScore = helpfulCount / (helpfulCount + notHelpfulCount) * 100;
    return [helpfulCount, notHelpfulCount, creationDate, helpfulScore];
  },

  batchGenerator: async (insertionArr) => {
    let batchStr;
    if (insertionArr) {
      batchStr = insertionArr.reduce((str, link) => {
        return str += mE.userTemplate(link)
      }, `${userTableKeys}\r\n`)
    } else {
      const paragraphs = require('../Read_Write_Files/reviews.json');
      batchStr = [...new Array(reviewsBigBatchLimiter)].reduce((str) => {
        return str += mE.reviewTemplate.apply(null, [...mE.reviewHelper(), paragraphs]);
      }, `${reviewTableKeys}\r\n`);
    }
    fs.writeFileSync(`Read_Write_Files/oneMillionRecordsStr.csv`, batchStr);
    log('data generated...')
  },

  dBQuery: (tableX) => {
    const db = Promise.promisifyAll(require('../../../db'));
    return new Promise((resolve, reject) => {
      db.query(
        `LOAD DATA LOCAL INFILE 'Read_Write_Files/oneMillionRecordsStr.csv'
        INTO TABLE ${tableX}
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
// Adding 4 Insertion Workers to mongoimport and running mongod --nojournal cut time over normal mongoimport from 4.92 to 2.64 minutes for 5 million records. (https://www.khalidalnajjar.com/insert-200-million-rows-into-mongodb-in-minutes/#:~:text=mongoimport%20has%20to%20convert%20the,format%20might%20increase%20the%20speed.)