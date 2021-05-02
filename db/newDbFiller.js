// For increasing max_packet_size ->
// https://stackoverflow.com/questions/93128/mysql-error-1153-got-a-packet-bigger-than-max-allowed-packet-bytes/104176#104176

console.log('Starting time stamp (Top of file)--> ' + new Date(Date.now()).toString());
const Sequelize = require('sequelize');
const path = require('path');
const sequelize = require('./config.js');
const UsernameGenerator = require('username-generator');
const lorem = require('./randomWordGeneration');
const random = require('./randomMathGeneration')
const fs = require('fs');

const primaryRecordNumber = 100;

// Dont Change these variables, only change the primaryRecordNumber.
const _reviewsRecordNumber = primaryRecordNumber * 25;
const _usersRecordNumber = primaryRecordNumber * 2.5;
const _arrayCopiesNumber = Math.floor(_usersRecordNumber / 250);
//

// // Takes a txt file, each line becomes an array item:
const linkArray = [...new Array(_arrayCopiesNumber)].map((item) => {
  return fs.readFileSync(`${__dirname}/list.txt`).toString().split('\n');
}).flat();

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const alphabetShuffle = (alphabet) => {
  var currentIndex = alphabet.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = alphabet[currentIndex];
    alphabet[currentIndex] = alphabet[randomIndex];
    alphabet[randomIndex] = temporaryValue;
  }
  return alphabet.join('');
}

(async () => {
  const { generateInBetweenSync, twoValProb, threeValProb } = random;
  const { User, Review } = sequelize.models;
  try {
    const { generateUsername } = UsernameGenerator;
    const userResults = await Promise.all(linkArray.map(async (link) => {
      return {
        // userName: await generateUsername('-'),
        userName: await alphabetShuffle(alphabet),
        profilePicture: link,
        userTheme: generateInBetweenSync(10),
        steamLevel: generateInBetweenSync(100),
        reviewsGiven: generateInBetweenSync(20),
        gamesOwned: generateInBetweenSync(125),
        playtime: generateInBetweenSync(80),
        productActivation: generateInBetweenSync(2)
      }
    }));

    const finalUserResults = await User.bulkCreate(userResults);
    console.log('Users Table Populated');
  } catch (err) {
    console.log(err.errors);
  }
    try {
      const reviewResults = await Promise.all([...new Array(_reviewsRecordNumber)].map(() => { return {} }).map(async (review) => {
        const helpfulCount = generateInBetweenSync(100);
        const notHelpfulCount = generateInBetweenSync(10);

        return {
          game: generateInBetweenSync(primaryRecordNumber),
          userID: generateInBetweenSync(_usersRecordNumber),
          reviewText: await lorem.lorem.generateParagraphs(generateInBetweenSync(10)),
          creationDate: (1616535988000 - (generateInBetweenSync(31536000000))),
          recommended: twoValProb(.15),
          helpfulCount: helpfulCount,
          notHelpfulCount: notHelpfulCount,
          helpfulScore: helpfulCount / (helpfulCount + notHelpfulCount) * 100,
          funnyCount: threeValProb(.7, .8),
          comments: threeValProb(.7, .9),
          earlyAccess: twoValProb(.9),
          awards: generateInBetweenSync(20)
        }
      }));
      const finalReviewResults = await Review.bulkCreate(reviewResults);
      console.log('Reviews Table Populated');
    } catch (err) {
      console.log(err.message);
    }
  console.log('Ending timestamp (Bottom of file)--> ' + new Date(Date.now()).toString());
  process.exit(1)
})()