module.exports.packages = {
  path: require('path'),
  fs: require('fs'),
  colors: require('colors'),
  performance: require('perf_hooks').performance
};

module.exports.random = require('../utils/randomGeneration.js');
module.exports.logs = require('../utils/loggers.js');
module.exports.utils = require('../utils/csvMachineUtils.js');

module.exports.userConstraints = ((primaryRecordNumber, statusUpdateInterval) => {
    return {
      primaryRecordNumber: primaryRecordNumber,
      statusUpdateInterval: statusUpdateInterval,
      _totalRecordsNumber: primaryRecordNumber * 2.5,
    }
  })(10000000, 1000000),

module.exports.reviewConstraints = ((primaryRecordNumber, statusUpdateInterval) => {
  return {
    primaryRecordNumber: primaryRecordNumber,
    statusUpdateInterval: statusUpdateInterval,
    _totalRecordsNumber: primaryRecordNumber * 10,
    _userRecordsNumber: module.exports.userConstraints._totalRecordsNumber
  }
})(10000000, 5000000)