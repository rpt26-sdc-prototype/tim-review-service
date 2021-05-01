const Sequelize = require('sequelize');
const sequelize = require('./config.js');

module.exports = {
  // Create
  createSingleGameReview: async (newReviewObj) => {
    try {
      const { Review } = sequelize.models;
      const createdReview = await Review.create(newReviewObj);
      return 'Created Review!';
    } catch (err) {
      return err;
    }
  },
  // Receive
  getSingleGameReview: async (reviewID) => {
    try {
      const { Review } = sequelize.models;
      const result = await Review.findOne({
        where: { id: reviewID }
      });
      console.log(result);
      return result;
    } catch (err) {
      return err;
    }
  },

  // Update
  updateSingleGameReview: async (reviewID, updateObj) => {
    try {
      const { Review } = sequelize.models;
      const result = await Review.update(
        updateObj,
        { where: { id: reviewID } }
      );
      return 'Updated Review!';
    } catch (err) {
      return err;
    }
  },

  // Delete
  deleteSingleGameReview: async (reviewID) => {
    try {
      const { Review } = sequelize.models;
      const result = await Review.destroy({ where: { id: reviewID } });
      return 'Deleted Review!';
    } catch (err) {
      return err;
    }
  }
}