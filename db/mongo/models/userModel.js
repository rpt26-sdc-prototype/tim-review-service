const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  profilePicture: String,
  userTheme: {type: Number},
  steamLevel: {type: Number},
  reviewsGiven: {type: Number},
  playtime: {type: Number},
  productActivation: {type: Number},
  gamesOwned: {type: Number}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
