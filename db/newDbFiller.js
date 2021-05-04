// For increasing max_packet_size ->
// https://stackoverflow.com/questions/93128/mysql-error-1153-got-a-packet-bigger-than-max-allowed-packet-bytes/104176#104176
// const UsernameGenerator = require('username-generator');

console.log('Starting time stamp (Top of file)--> \n\n' + new Date(Date.now()).toString());
const Sequelize = require('sequelize');
const colors = require('colors');
const sequelize = require('./config.js');
const lorem = require('./randomWordGeneration');
const random = require('./randomMathGeneration')
const fs = require('fs');
const { performance } = require('perf_hooks');

const primaryRecordNumber = 10000000;
const usersBigBatchLimiter = 1000000;
const usersSmallBatchLimiter = 25000;

// Dont Change these variables, only change the primaryRecordNumber and batchLimiter if you must.
// Total Records
const _reviewsRecordNumber = primaryRecordNumber * 25; //25 million
const _usersRecordsNumber = primaryRecordNumber * 2.5; //250 million

// 25 Big Batches to settle...each with 1 million records, each small batch is 25k so 40 small batches.
const _usersBigBatchNumber = _usersRecordsNumber / usersBigBatchLimiter; //25
const _usersSmallBatchNumber = usersBigBatchLimiter / usersSmallBatchLimiter; //40
const _usersArrayCopiesNumber = usersSmallBatchLimiter / 250; //100
//

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//   , 'i', 'j', 'k', 'l', 'm', 'n', 'o',
//   'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
// ];

// const alphabetShuffle = (alphabet) => {
//   var currentIndex = alphabet.length, temporaryValue, randomIndex;
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     // And swap it with the current element.
//     temporaryValue = alphabet[currentIndex];
//     alphabet[currentIndex] = alphabet[randomIndex];
//     alphabet[randomIndex] = temporaryValue;
//   }
//   return alphabet.join('');
// }

// base 36 function...
// https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
function randomString(length) {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

const linkArray = fs.readFileSync(`${__dirname}/list.txt`).toString().split('\n');

const insertionArr = [...new Array(_usersArrayCopiesNumber)].map(()=> {
  return linkArray;
}).flat();

fs.writeFileSync(`${__dirname}/newList.txt`, insertionArr.join('\n'));


// https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

(async () => {
  const { User, Review } = sequelize.models;
  const { generateInBetweenSync, twoValProb, threeValProb } = random;

  // Users...
  try {
    console.log(`
     Users Table Populating
    `.green);
    const performanceArr = [];

    await asyncForEach([...new Array(_usersBigBatchNumber)], async (bigBatch, dex, arr) => {
      console.log(`<--- User Big Batch ${(dex + 1)}/${_usersBigBatchNumber}--->`.yellow);
      const start = performance.now();
      await Promise.all(
        [...new Array(_usersSmallBatchNumber)].map(async (batch, count) => {
          if (((count + 1) / 5) % 1 === 0) {
            console.log(`     USBP... ${count + 1}/${_usersSmallBatchNumber}`)
          };
          await User.bulkCreate(
              insertionArr
              .map(link => {
                return {
                  userName: randomString(12),
                  profilePicture: link,
                  userTheme: generateInBetweenSync(10),
                  steamLevel: generateInBetweenSync(100),
                  reviewsGiven: generateInBetweenSync(20),
                  gamesOwned: generateInBetweenSync(125),
                  playtime: generateInBetweenSync(80),
                  productActivation: generateInBetweenSync(2)
                }
              })
          )
        })
      );
      const end = performance.now();
      const difference = (((end - start) / 1000));
      performanceArr.push(Number(difference));
      const trending = performanceArr.reduce((total, item) => {
        total += item;
        return total;
      }, 0);

      const avgTime = trending / performanceArr.length;
      const totalEstTime = (avgTime * _usersBigBatchNumber) / 60;
      const totalElapsedTime = trending / 60;

      console.log(`
          Batch Took ${(difference).toFixed(2)} seconds!
          Average Batch execution- ${(trending / performanceArr.length).toFixed(2)} Secs
          Total Estimated Seeding Time- ${(totalEstTime).toFixed(2)} Mins.
          Total Elapsed Time- ${(totalElapsedTime).toFixed(2)} Mins.
          Est Remaining Time ${(totalEstTime - totalElapsedTime).toFixed(2)} Mins
          `.cyan
      );
    });
    console.log(' \n Users Table Populated \n ');
  } catch (err) {
    console.log(err.message);
    // console.log(err.errors);
  }


  // Reviews...
  // try {
  //   await Review.bulkCreate(
  //     ([...new Array(_reviewsRecordNumber)]
  //     .map((review) => {
  //       const helpfulCount = generateInBetweenSync(100);
  //       const notHelpfulCount = generateInBetweenSync(10);
  //       return {
  //         game: generateInBetweenSync(primaryRecordNumber),
  //         userID: generateInBetweenSync(_usersRecordsNumber),
  //         reviewText: lorem.generateParagraphs(generateInBetweenSync(10)),
  //         creationDate: (1616535988000 - (generateInBetweenSync(31536000000))),
  //         recommended: twoValProb(.15),
  //         helpfulCount: helpfulCount,
  //         notHelpfulCount: notHelpfulCount,
  //         helpfulScore: helpfulCount / (helpfulCount + notHelpfulCount) * 100,
  //         funnyCount: threeValProb(.7, .8),
  //         comments: threeValProb(.7, .9),
  //         earlyAccess: twoValProb(.9),
  //         awards: generateInBetweenSync(20)
  //       }
  //     })
  //   ));
  //   console.log('Reviews Table Populated');
  // } catch (err) {
  //   console.log(err.errors);
  // }
  console.log('Ending timestamp (Bottom of file)--> ' + new Date(Date.now()).toString());
  process.exit(1)
})()