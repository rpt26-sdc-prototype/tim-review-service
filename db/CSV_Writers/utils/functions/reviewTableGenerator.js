const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require(path.resolve('../config.js'));

module.exports = async (tableCount, perfArr) => {
  if ((perfArr.length / 1) % 1 !== 0) {
    return [tableCount, `review${tableCount}s`];
  }
  tableCount++;
  console.log('Creating new Reviews table: ' + tableCount);

  const { sequelize, connect, model } = require(path.resolve('../config.js'));
  model('Review')(sequelize, Sequelize.DataTypes, tableCount);
  await connect();
  // await database.sequelize.query(`CREATE TABLE ${`reviews${tableCount}`} (
  //   ID INT NOT NULL AUTO_INCREMENT,
  //   game INT,
  //   userID INT,
  //   reviewText VARCHAR(8000),
  //   creationDate BIGINT,
  //   recommended INTEGER,
  //   helpfulCount INTEGER,
  //   notHelpfulCount INTEGER,
  //   helpfulScore INTEGER,
  //   funnyCount INTEGER,
  //   earlyAccess INTEGER,
  //   awards INTEGER,
  //   comments INTEGER,
  //   PRIMARY KEY (ID),
  //   FOREIGN KEY (userID) REFERENCES user1(ID)
  // );`)
  // console.log('created table')
  // Need to readd this one->

  return [tableCount, `review${tableCount}s`]
}