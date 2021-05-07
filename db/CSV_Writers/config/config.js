const mE = module.exports;
mE.primaryRecordNumber = 10000000;
mE.usersBigBatchLimiter = 1000000;
mE.usersSmallBatchLimiter = 25000;

// Dont Change these variables, only change the primaryRecordNumber and the batchLimiters if you must.

// Total User Records->
mE._usersRecordsNumber = mE.primaryRecordNumber * 2.5; //250 million @ 10 Million Primary Records

// 25 Big Batches to settle...each with 1 million records, each small batch is 25k so 40 small batches.
mE._usersBigBatchNumber = mE._usersRecordsNumber / mE.usersBigBatchLimiter;
mE._usersSmallBatchNumber = mE.usersBigBatchLimiter / mE.usersSmallBatchLimiter; //40
mE._usersArrayCopiesNumber = mE.usersSmallBatchLimiter / 250; //100

// Total Reviews Records->
mE.reviewsBigBatchLimiter = 1000000;
mE.reviewsSmallBatchLimiter = 25000;

mE._reviewsRecordsNumber = mE.primaryRecordNumber * 25; //250 million
mE._reviewsBigBatchNumber = mE._reviewsRecordsNumber / mE.reviewsBigBatchLimiter; //250
mE._reviewsSmallBatchNumber = mE.reviewsBigBatchLimiter / mE.reviewsSmallBatchLimiter; //40

