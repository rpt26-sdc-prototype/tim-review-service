const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
// const sequelize = require('./config.js');

module.exports = {
  getGameReviews: async (gameID) => {
    try {
      console.log('gameID--> ' + gameID)
      let test = await Promise.all([...new Array(2)].map(async (rx, index) => {
        const { sequelize, connect, model } = require('./config.js');
        let { Review, User } = sequelize.models;

        User = model("User")(sequelize, Sequelize.DataTypes, (index + 1));

        await Promise.all([...new Array(2)].map(async (x, reviewDex) => {
          await connect();
          Review = model('Review')(sequelize, Sequelize.DataTypes, (reviewDex + 1));
          // Review = Review(sequelize.sequelize, Sequelize.DataTypes, (reviewDex + 1));
          await User.associate(Review)
          console.log(User);
          const results = await User.findAll({
            attributes: [
              'userName',
              'profilePicture',
              'userTheme',
              'steamLevel',
              'reviewsGiven',
              'playtime',
              'productActivation',
              'gamesOwned',
              [Sequelize.col(`review${reviewDex + 1}s.creationDate`), 'creationDate'],
              [Sequelize.col(`review${reviewDex + 1}s.reviewText`), 'reviewText'],
              [Sequelize.col(`review${reviewDex + 1}s.creationDate`), 'creationDate'],
              [Sequelize.col(`review${reviewDex + 1}s.recommended`), 'recommended'],
              [Sequelize.col(`review${reviewDex + 1}s.helpfulCount`), 'helpfulCount'],
              [Sequelize.col(`review${reviewDex + 1}s.notHelpfulCount`), 'notHelpfulCount'],
              [Sequelize.col(`review${reviewDex + 1}s.helpfulScore`), 'helpfulScore'],
              [Sequelize.col(`review${reviewDex + 1}s.funnyCount`), 'funnyCount'],
              [Sequelize.col(`review${reviewDex + 1}s.earlyAccess`), 'earlyAccess'],
              [Sequelize.col(`review${reviewDex + 1}s.awards`), 'awards'],
              [Sequelize.col(`review${reviewDex + 1}s.comments`), 'comments'],
            ],
            include: [
              {
                model: Review,
                where: { game: gameID },
                as: `review${reviewDex + 1}s`,
                attributes: [],
              },
            ],
            order: [[`review${reviewDex + 1}s`, 'creationDate', 'desc']]
          });
          console.log(results);
          return results;
        }))

        // const results = await User.findAll({
        //   where: { id: 1 }
        // })
        // return results;
      }));
      console.log(test);

      return test.flat();

    } catch (err) {
      console.log(err);
      return err;
    }
  }
};