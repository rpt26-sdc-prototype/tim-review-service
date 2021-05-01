const Sequelize = require('sequelize');
const path = require('path');
const sequelize = require('./config.js');

module.exports = {
  getGameReviews: async (gameID) => {
    try {
      console.log('gameID--> ' + gameID)
      const { Review, User } = sequelize.models;
      await User.associate(sequelize.models)
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
          [Sequelize.col('reviews.creationDate'), 'creationDate'],
          [Sequelize.col('reviews.reviewText'), 'reviewText'],
          [Sequelize.col('reviews.creationDate'), 'creationDate'],
          [Sequelize.col('reviews.recommended'), 'recommended'],
          [Sequelize.col('reviews.helpfulCount'), 'helpfulCount'],
          [Sequelize.col('reviews.notHelpfulCount'), 'notHelpfulCount'],
          [Sequelize.col('reviews.helpfulScore'), 'helpfulScore'],
          [Sequelize.col('reviews.funnyCount'), 'funnyCount'],
          [Sequelize.col('reviews.earlyAccess'), 'earlyAccess'],
          [Sequelize.col('reviews.awards'), 'awards'],
          [Sequelize.col('reviews.comments'), 'comments'],
        ],
        include: [
          {
            model: Review,
            where: { game: gameID },
            as: 'reviews',
            attributes: [],
          },
        ],
        order: [['reviews', 'creationDate', 'desc']]
      });
      return results;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};