const {
  packages: { path },
  random: { generateInBetweenSync: gIBS, randomString: rS, twoValProb: tVP, threeValProb: rEVP },
  userConstraints, reviewConstraints
} = require('./config.js');

module.exports = {
  userProvisions: {
    title: 'users',
    constraints: userConstraints,
    template: () => `${"'" + rS() + "'"},${module.exports.userProvisions.jsonFile[(gIBS(250))]},${gIBS(10)},${gIBS(100)},${gIBS(20)},${gIBS(125)},${gIBS(80)},${gIBS(2)}` + '\r\n',
    jsonFile: require(path.resolve(`Read_Write_Files/profileLinks.json`)),
    dBQueryStr: `COPY users(userName, profilePicture, userTheme, steamLevel, reviewsGiven, playtime, productActivation, gamesOwned) FROM '${path.resolve('Read_Write_Files/records.csv')}' DELIMITER ','`,
    dBResetStr: `
      DROP TABLE IF EXISTS users;
      CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      userName varchar,
      profilePicture varchar,
      userTheme int,
      steamLevel int,
      reviewsGiven int,
      playtime int,
      productActivation int,
      gamesOwned int
    );`,
    dBCountStr: `SELECT COUNT(*) FROM users`,
  },
  reviewProvisions: {
    title: 'reviews',
    constraints: reviewConstraints,
    template: (pRN, uRN) => {
      const helpfulCount = gIBS(100);
      const notHelpfulCount = gIBS(10);
      const creationDate = (1616535988000 - (gIBS(31536000000)));
      const helpfulScore = helpfulCount / (helpfulCount + notHelpfulCount) * 100;
      return `${gIBS(pRN)},${gIBS(uRN)},${module.exports.reviewProvisions.jsonGetter(gIBS(1), module.exports.reviewProvisions.jsonFile)},${creationDate},${tVP(.15)},${helpfulCount},${notHelpfulCount},${helpfulScore},${rEVP(.7, .8)},${rEVP(.7, .9)},${tVP(.9)},${gIBS(20)}` + `\r\n`
    },
    jsonGetter: (numOfPs, paragraphs) => {
      return [...new Array(numOfPs)].map(num => module.exports.reviewProvisions.jsonFile[gIBS(1000)]).join('');
    },
    jsonFile: require(path.resolve(`Read_Write_Files/reviews.json`)),
    dBQueryStr: `COPY reviews(game, userID, reviewText, creationDate, recommended, helpfulCount, notHelpfulCount, helpfulScore, funnyCount, earlyAccess, awards, comments) FROM '${path.resolve('Read_Write_Files/records.csv')}' DELIMITER ','`,

    dBResetStr: `
    DROP TABLE IF EXISTS reviews;
    CREATE TABLE reviews (
      id SERIAL PRIMARY KEY,
      game int,
      userID int,
      reviewText varchar,
      creationDate bigint,
      recommended int,
      helpfulCount int,
      notHelpfulCount int,
      helpfulScore decimal,
      funnyCount int,
      earlyAccess int,
      awards int,
      comments int
    );`,
    dBCountStr: `SELECT COUNT(*) FROM reviews`,
  },
};
console.log(path.join());





// | sudo -u jameshrivnak psql -d ReviewsService -c "COPY users(userName, profilepicture, userTheme, steamLevel, reviewsGiven, playtime, productActivation, gamesOwned) FROM stdin delimiter ','; "