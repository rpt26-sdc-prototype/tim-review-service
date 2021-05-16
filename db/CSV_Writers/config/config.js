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
mE._reviewsRecordsNumber = mE.primaryRecordNumber * 25; //250 million
mE._reviewsBigBatchNumber = mE._reviewsRecordsNumber / mE.reviewsBigBatchLimiter; //250

