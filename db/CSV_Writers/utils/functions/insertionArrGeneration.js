const fs = require('fs');
const path = require('path');

module.exports = (_usersArrayCopiesNumber) => {
  const linkArray = fs.readFileSync(path.resolve(`Read_Write_Files/_twoHundredFiftyProfileLinks.txt`)).toString().split('\n');
  const insertionArr = [...new Array(_usersArrayCopiesNumber)].map(() => {
    return linkArray;
  }).flat().filter(link => { return link.length > 0 });

  fs.writeFileSync(path.resolve(`Read_Write_Files/twentyFiveKProfileLinks.txt`), insertionArr.join('\n'));
  // return insertionArr;
};