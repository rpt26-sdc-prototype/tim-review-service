const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require(path.resolve('../config.js'));

module.exports = async (tableCount, perfArr) => {
  if ((perfArr.length / 3) % 1 !== 0) {
    return [tableCount, `user${tableCount}`];
  }
  tableCount++;
  console.log(`Creating new User table: ${tableCount}`);
  await database.sequelize.query(`CREATE TABLE ${`user${tableCount}`}(
    ID INT NOT NULL AUTO_INCREMENT,
    userName varchar(50) UNIQUE NOT NULL,
    profilePicture varchar(255),
    userTheme INTEGER,
    steamLevel INTEGER,
    reviewsGiven INTEGER,
    playtime INTEGER,
    productActivation INTEGER,
    gamesOwned INTEGER,
    PRIMARY KEY (ID))`);
  return [tableCount, `user${tableCount}`];
};