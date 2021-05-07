const PromiseX = require('bluebird');
const path = require('path');
const db = PromiseX.promisifyAll(require(path.resolve('../../db')));

module.exports = (table) => {
  return new Promise((resolve, reject) => {
    db.query(
      `LOAD DATA LOCAL INFILE 'Read_Write_Files/oneMillionRecordsStr.csv'
      INTO TABLE ${table}
      FIELDS TERMINATED BY ','
      ENCLOSED BY '"'
      LINES TERMINATED BY '\n'
      IGNORE 1 ROWS;`
      , (err, result) => {
        if (err) {
          console.log(err);
          return reject("db", `${err.message}`);
        }
        resolve();
      })
  })
};