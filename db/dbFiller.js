var Promise = require('bluebird');
var UsernameGenerator = Promise.promisifyAll(require('username-generator'));
var db = Promise.promisifyAll(require('../db'));
var lorem = require('./randomWordGeneration');
var random = require('./randomMathGeneration')

var fs = require('fs');
var linkArray = fs.readFileSync(`${__dirname}/../bucketLinks/list.txt`).toString().split('\n');


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
    var userTheme = random.generateInbetweenSync(10)
    var steamLevel = random.generateInbetweenSync(100)
    var reviewsGiven = random.generateInbetweenSync(20)
    var gamesOwned = random.generateInbetweenSync(25)
    var playTime = random.generateInbetweenSync(80)
    var activation = random.generateInbetweenSync(2)

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

  console.log(lorem)
  //reviews
  for (var i = 0; i < 2500; i++) {
    var randomUser = random.generateInbetweenSync(250)
    var reviewTextSize = random.generateInbetweenSync(10)
    var reviewText = await lorem.lorem.generateParagraphs(reviewTextSize)
    var creationDate = (1615265125152 - random.generateInbetweenSync(31536000))
    var positiveReview = random.twoValProb(.1)
    var helpfulCount = random.generateInbetweenSync(50)
    var notHelpfulCount = random.threeValProb(.8, .95)
    var funnyCount = random.threeValProb(.7, .8)
    var comments = random.threeValProb(.7, .9)
    var earlyAccess = random.twoValProb(.9)
    var awards = random.generateInbetweenSync(20)
    var game = random.generateInbetweenSync(100)

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