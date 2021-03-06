var Promise = require('bluebird');
const LoremIpsum = Promise.promisifyAll(require("lorem-ipsum").LoremIpsum);
var UsernameGenerator = Promise.promisifyAll(require('username-generator'));
var db = Promise.promisifyAll(require('../db'));

var fs = require('fs');
var linkArray = fs.readFileSync(`${__dirname}/../bucketLinks/list.txt`).toString().split('\n');

//random text configuration
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

//random generation
var generateInbetweenSync = (max) => {
  return Math.ceil(Math.random() * max)
};

var threeValProb = (num1, num2) => {
  var random = Math.random()
    if (random <= num1) {
      return 0
    } else if (random <= num2) {
      return 1
    } else {
      return 2
    }
}

var twoValProb = (num1) => {
  var random = Math.random()
    if (random <= num1) {
      return 0
    }  else {
      return 1
    }
}

//limit the number of querys persecond to db
var makeEverythingWait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve()
    }, 100)
  })
}

(async () => {
  // user
  for (var i = 0; i < 250; i++) {
    var username = await UsernameGenerator.generateUsername()
    var profileLink = linkArray[i];
    var userTheme = generateInbetweenSync(10)
    var steamLevel = generateInbetweenSync(100)
    var reviewsGiven = generateInbetweenSync(20)
    var gamesOwned = generateInbetweenSync(25)
    var playTime = generateInbetweenSync(80)
    var activation = generateInbetweenSync(2)

    await db.query(`insert into users (
      userName,
      profilePicture,
      userTheme,
      steamLevel,
      reviewsGiven,
      playtime,
      productActivation
      ) values (
        '${username}',
        '${profileLink}',
        '${userTheme}',
        '${steamLevel}',
        '${reviewsGiven}',
        '${playTime}',
        '${activation}'
        )`)
  }

  //reviews
  for (var i = 0; i < 2500; i++) {
    var randomUser = generateInbetweenSync(250)
    var reviewTextSize = generateInbetweenSync(10)
    var reviewText = await lorem.generateParagraphs(reviewTextSize)
    var creationDate = generateInbetweenSync(31536000)
    var positiveReview = twoValProb(.1)
    var helpfulCount = generateInbetweenSync(50)
    var notHelpfulCount = threeValProb(.8, .95)
    var funnyCount = threeValProb(.7, .8)
    var comments = threeValProb(.7, .9)
    var earlyAccess = twoValProb(.9)
    var awards = generateInbetweenSync(20)
    var game = generateInbetweenSync(100)

    await db.query(`insert into reviews (
      userID,
      game,
      reviewText,
      creationDate,
      recommended,
      helpfulCount,
      notHelpfulCount,
      funnyCount,
      earlyAccess,
      awards,
      comments
      ) values (
        '${randomUser}',
        '${game}',
        '${reviewText}',
        '${creationDate}',
        '${positiveReview}',
        '${helpfulCount}',
        '${notHelpfulCount}',
        '${funnyCount}',
        '${earlyAccess}',
        '${awards}',
        '${comments}'
        )`)
    await makeEverythingWait()

  }
  process.exit(1)
})()