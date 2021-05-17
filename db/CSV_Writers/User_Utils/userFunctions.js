const { Promise, fs, path } = require('../packages.js');
const { generateInBetweenSync } = require('../utils/randomMathGeneration');
const { randomString } = require('../utils/randomUsernameGeneration.js');

const userTableKeys = ["userName", "profilePicture", "userTheme", "steamLevel", "reviewsGiven", "playtime", "productActivation", "gamesOwned"].join(',');

module.exports = {
  insertionArrGeneration: (_usersArrayCopiesNumber) => {
    const linkArray = fs.readFileSync(`Read_Write_Files/_twoHundredFiftyProfileLinks.txt`).toString().split('\n');
    return [...new Array(_usersArrayCopiesNumber)].map(() => linkArray).flat().filter(link => link.length > 0);
  },

  userBatchGenerator: async (insertionArr) => {
    const fiveMillionUsers = insertionArr.reduce((str, link) => {
      return str += `a,${"'" + randomString(18) + "'"},${"'" + link + "'"},${generateInBetweenSync(10)},${generateInBetweenSync(100)},${generateInBetweenSync(20)},${generateInBetweenSync(125)},${generateInBetweenSync(80)},${generateInBetweenSync(2)}` + '\r\n'
    }, '')

    fs.writeFileSync(`Read_Write_Files/oneMillionRecordsStr.csv`, `${userTableKeys}\n${fiveMillionUsers}`);

    console.log('data generated...');
  },

  userDBQuery: () => {
    console.log('inserting...')
    return new Promise((resolve, reject) => {
      const db = Promise.promisifyAll(require(path.resolve('../../db')));
      db.query(
        `LOAD DATA LOCAL INFILE 'Read_Write_Files/oneMillionRecordsStr.csv'
        IGNORE
        INTO TABLE users
        FIELDS TERMINATED BY ','
        ENCLOSED BY '"'
        LINES TERMINATED BY '\n'
        IGNORE 1 ROWS;`
        , (err, result) => {
          if (err) {
            console.log(err);
            return reject("db", `${err}`);
          }
          resolve();
        })
    })
  },
};