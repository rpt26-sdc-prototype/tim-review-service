var db = require('./index.js');

var read = (gameID, cb) => {

  db.query(`select * from users inner join reviews where reviews.game = ${gameID}`, (error, results, fields) => {
    if (error) {
      throw error;
    } else {
      var returnArray = [];

      for (let i = 0; i < results.length; i++) {
        returnArray.push({
          gameID: results[i].game,
          userName: results[i].userName,
          reviewText: results[i].reviewText,
          creationDate: results[i].creationDate,
          recommended: results[i].recommended,
          helpfulCount: results[i].helpfulCount,
          notHelpfulCount: results[i].notHelpfulCount,
          funnyCount: results[i].funnyCount,
          earlyAccess: results[i].earlyAccess,
          awards: results[i].awards,
          comments: results[i].comments,
          profilePicture: results[i].profilePicture,
          userTheme: results[i].userTheme,
          steamLevel: results[i].steamLevel,
          reviewsGiven: results[i].reviewsGiven,
          playtime: results[i].playtime,
          productActivation: results[i].productActivation,
        });
      }

      cb(null, returnArray);
    }
  });
};

//test
// read(1, (error, data) => {
//   console.log(data);
// });



module.exports.read = read;