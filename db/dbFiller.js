var UsernameGenerator = require('username-generator');
var Promise = require('bluebird');
const LoremIpsum = Promise.promisifyAll(require("lorem-ipsum").LoremIpsum);
var UsernameGenerator = Promise.promisifyAll(require('username-generator'));

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

var generateInbetween = (max) => {
  return new Promise((resolve, reject) => {
    resolve(Math.ceil(Math.random() * max));
  });
};

var tenPercentChanceFalse = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() >= 0.9) {
      resolve(false)
    } else {
      resolve(true)
    }
  })
}

// console.log(generateInbetween(100000));

var makeEverythingWait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('hello')
    }, 1000)
  })
}

async function test () {
  // user
  var username = await UsernameGenerator.generateUsername()
  var userTheme = await generateInbetween(10)
  var steamLevel = await generateInbetween(100)
  var reviewsGiven = await generateInbetween(20)
  var gamesOwned = await generateInbetween(25)
  var playTime = await generateInbetween(80)



  // review
  var randomUser = await generateInbetween(250)
  var reviewTextSize = await generateInbetween(10)
  var reviewText = await lorem.generateParagraphs(reviewTextSize)
  var creationDate = await generateInbetween(31536000)
  var positiveReview = await tenPercentChanceFalse()
  var helpfulCount = await generateInbetween(50)

  var notHelpfulCount = await new Promise((resolve, reject)=> {
    var random = Math.random()
    if (random <= .8) {
      resolve(0)
    } else if (random <= .95) {
      resolve(1)
    } else {
      resolve(2)
    }
  })

  var funnyCount = await new Promise((resolve, reject)=> {
    var random = Math.random()
    if (random <= .7) {
      resolve(0)
    } else if (random <= .9) {
      resolve(1)
    } else {
      resolve(2)
    }
  })

  var earlyAccess = await new Promise((resolve, reject)=> {
    var random = Math.random()
    if (random <= .9) {
      resolve(0)
    } else {
      resolve(1)
    }
  })


  // var wait = await makeEverythingWait()

  console.log(`the random user is ${randomUser}`)
  console.log(`their username is ${username}`)
  console.log(`playtime in seconds ${playTime}`)
  console.log(`positive review count ${positiveReview}`)
  console.log(`helpful count ${helpfulCount}`)
  console.log(`not helpful count ${notHelpfulCount}`)
  console.log(`funny count ${funnyCount}`)
  console.log(`early access ${earlyAccess}`)
  console.log(`review will be this many paragraphs long: ${reviewTextSize}`)
  // console.log(wait)
  // console.log(reviewText)

}

test()

// for (var i = 0; i < 50; i++) {
//   console.log(Math.floor(Math.random() * 10))
// }