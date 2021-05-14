const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');

module.exports = async (tableCount, perfArr) => {
  if ((perfArr.length / 5) % 1 !== 0) {
    return [tableCount, `user${tableCount}s`];
  }
  tableCount++;
  console.log(`Creating new User table: ${tableCount}`);
  // let template = fs.readFileSync('../models/users_model.js')
  // fs.writeFileSync('../test.js', `module.exports = ${tableCount};`);

  const { sequelize, connect, model } = require(path.resolve('../config.js'));
  model('User')(sequelize, Sequelize.DataTypes, tableCount);
  await connect();
  // await connect(tableCount);

  // await database.sequelize.query(`CREATE TABLE IF NOT EXISTS ${`user${tableCount}`}(
  //   ID INT NOT NULL AUTO_INCREMENT,
  //   userName varchar(50) UNIQUE NOT NULL,
  //   profilePicture varchar(255),
  //   userTheme INTEGER,
  //   steamLevel INTEGER,
  //   reviewsGiven INTEGER,
  //   playtime INTEGER,
  //   productActivation INTEGER,
  //   gamesOwned INTEGER,
  //   PRIMARY KEY (ID))`);
  return [tableCount, `user${tableCount}s`];
};