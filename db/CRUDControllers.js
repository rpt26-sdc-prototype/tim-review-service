const Sequelize = require('sequelize');
const path = require('path');
const sequelize = require('./config.js');

module.exports = {
  // Create
  createSingleGameReview: async (newReviewObj) => {
    try {
      const { Review } = sequelize.models;
      const createdReview = await Review.create(newReviewObj);
      console.log(createdReview);
      return createdReview;
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
      })
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
      return 'Updated!';
    } catch (err) {
      return err;
    }
  },

  // Delete
  deleteSingleGameReview: async (reviewID) => {
    try {
      const { Review } = sequelize.models;
      const result = await Review.destroy({ where: { id: reviewID } });
      return 'Deleted!';
    } catch (err) {
      return err;
    }
  }
}