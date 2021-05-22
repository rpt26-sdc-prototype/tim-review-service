const mE = module.exports;

mE.primaryRecordNumber = 10000000;
mE.usersBigBatchLimiter = 500000;

// Dont Change these variables, only change the primaryRecordNumber and the batchLimiters if you must.
// Total User Records->
mE._usersRecordsNumber = mE.primaryRecordNumber * 2.5; //

//
mE._usersBigBatchNumber = mE._usersRecordsNumber / mE.usersBigBatchLimiter;
mE._usersArrayCopiesNumber = mE.usersBigBatchLimiter / 250  ; //20000

// Total Reviews Records->
mE.reviewsBigBatchLimiter = 1000000;
mE._reviewsRecordsNumber = mE.primaryRecordNumber * 10; //100 Million
mE._reviewsBigBatchNumber = mE._reviewsRecordsNumber / mE.reviewsBigBatchLimiter; //100

mE.reviewTableKeys = ["game", "userID", "reviewText", "creationDate", "recommended", "helpfulCount", "notHelpfulCount", "helpfulScore", "funnyCount", "earlyAccess", "awards", "comments"].join(",");

mE.userTableKeys = ["userName", "profilePicture", "userTheme", "steamLevel", "reviewsGiven", "playtime", "productActivation", "gamesOwned"].join(',');

mE.random = require('../utils/randomGeneration.js');
mE.packages = require('../packages.js');
mE.logs = require('../utils/loggers.js');
mE.utils = require('../utils/utils.js');

