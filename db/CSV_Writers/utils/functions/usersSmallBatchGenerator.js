const fs = require('fs');
const path = require('path');
const { generateInBetweenSync } = require(path.resolve('utils/data_functions/randomMathGeneration'));
const { randomString } = require(path.resolve('utils/data_functions/randomUsernameGeneration.js'));
const userTableKeys = ["userName","profilePicture","userTheme","steamLevel","reviewsGiven","playtime","productActivation","gamesOwned"].join(',');

module.exports = (_usersSmallBatchNumber, logSmallBatchUpdates, bigIndex) => {
  let oneMillionRecordsStr = '';
  for (let i = 0; i < _usersSmallBatchNumber; i++) {
    logSmallBatchUpdates(i);
    const insertionArr = fs.readFileSync(path.resolve('Read_Write_Files/twentyFiveKProfileLinks.txt')).toString().split('\n');
    oneMillionRecordsStr += insertionArr.map((link, index) => {
      return `a,${"'" + randomString(18) + "'"},${"'" + link + "'"},${generateInBetweenSync(10)},${generateInBetweenSync(100)},${generateInBetweenSync(20)},${generateInBetweenSync(125)},${generateInBetweenSync(80)},${generateInBetweenSync(2)}`;
    }).join('\r\n') + '\r\n';
  };

  fs.writeFileSync(path.resolve(`Read_Write_Files/oneMillionRecordsStr.csv`), `${userTableKeys}\n${oneMillionRecordsStr}`);
}