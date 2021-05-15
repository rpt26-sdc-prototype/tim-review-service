var db = require('./index.js');
module.exports = {
  read: (gameID, cb) => {
    console.log('reading')
    db.query(`SELECT * FROM reviews1 INNER JOIN user1 ON user1.ID = reviews1.userID WHERE reviews1.game = ${gameID} ORDER BY reviews1.creationDate DESC`, (error, results, fields) => {
      if (error) {
        throw error;
      } else {
        var returnArray = [];
        console.log(results);
        for (let i = 0; i < results.length; i++) {
          returnArray.push({
            gameID: results[i].game,
            userName: results[i].userName,
            reviewText: results[i].reviewText,
            creationDate: results[i].creationDate,
            recommended: results[i].recommended,
            helpfulCount: results[i].helpfulCount,
            notHelpfulCount: results[i].notHelpfulCount,
            helpfulScore: results[i].helpfulScore,
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
            gamesOwned: results[i].gamesOwned
          });
        }
        cb(null, returnArray);
      }
    });
  },
}
