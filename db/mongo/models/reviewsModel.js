const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  game: { type: Number },
  userID: { type: Number },
  reviewText: String,
  creationDate: {type: Number},
  recommended: {type: Number},
  helpfulCount: {type: Number},
  notHelpfulCount: {type: Number},
  helpfulScore: {type: Number},
  funnyCount: { type: Number },
  earlyAccess: { type: Number },
  awards: { type: Number },
  comments: {type: Number}
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;