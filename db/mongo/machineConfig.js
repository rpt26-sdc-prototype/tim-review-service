mE = module.exports;

mE.packages = {
  fs: require('fs'),
  mongoose: require('mongoose'),
  path: require('path'),
  colors: require('colors'),
  performance: require('perf_hooks').performance,
  LoremIpsum: require('lorem-ipsum').LoremIpsum,
  Promise: require('bluebird')
};

mE.userConstraints = ((primaryRecordNumber, statusUpdateInterval) => {
  return {
    primaryRecordNumber: primaryRecordNumber, //10000000
    statusUpdateInterval: statusUpdateInterval, //25000
    _totalRecordsNumber: primaryRecordNumber * 2.5, //25 million
    _totalStatusUpdates: (primaryRecordNumber * 2.5) / statusUpdateInterval, //25
  }
})(10000000, 1000000);

mE.reviewConstraints = ((primaryRecordNumber, statusUpdateInterval) => {
  return {
    primaryRecordNumber: primaryRecordNumber,
    statusUpdateInterval: statusUpdateInterval,
    _totalRecordsNumber: primaryRecordNumber * 10,
    _totalStatusUpdates: (primaryRecordNumber * 10) / statusUpdateInterval,
  }
})(10000000, 1000000)

mE.tableKeys = {
  reviewTableKeys: ["game", "userID", "reviewText", "creationDate", "recommended", "helpfulCount", "notHelpfulCount", "helpfulScore", "funnyCount", "earlyAccess", "awards", "comments"].join(","),
  userTableKeys: ["userName", "profilePicture", "userTheme", "steamLevel", "reviewsGiven", "playtime", "productActivation", "gamesOwned"].join(','),
}

mE.models = {
  User: require('./models/userModel.js'),
  Review: require('./models/reviewsModel.js')
};

mE.utils = {
    connect: require('./mongoDB.js'),
    logs: require('./Mongo_CSV_Machine/utils/loggers.js'),
    exec: require('child_process').exec,
    random: require('./Mongo_CSV_Machine/utils/randomGeneration.js'),
  }

mE.utils.csvUtils = require('./Mongo_CSV_Machine/utils/utils.js');
mE.csvMachine = require('./Mongo_CSV_Machine/mongoCSVMachine.js');


