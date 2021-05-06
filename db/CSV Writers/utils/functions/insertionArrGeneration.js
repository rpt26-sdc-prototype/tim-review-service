const fs = require('fs');

module.exports = (_usersArrayCopiesNumber) => {
  const linkArray = fs.readFileSync(`${__dirname}/../../Read_Write_Files/_twoHundredFiftyProfileLinks.txt`).toString().split('\n');
  const insertionArr = [...new Array(_usersArrayCopiesNumber)].map(() => {
    return linkArray;
  }).flat();

  fs.writeFileSync(`${__dirname}/../../Read_Write_Files/twentyFiveKProfileLinks.txt`, insertionArr.join('\n'));
  return insertionArr;
};