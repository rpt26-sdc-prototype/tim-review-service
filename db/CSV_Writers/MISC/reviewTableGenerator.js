const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require(path.resolve('../config.js'));
//   FOREIGN KEY (userID) REFERENCES user1(ID)

module.exports = async (tableCount, perfArr) => {
  if ((perfArr.length / 1) % 1 !== 0) {
    return [tableCount, `review${tableCount}s`];
  }
  tableCount++;
  console.log('Creating new Reviews table: ' + tableCount);

  const { sequelize, connect, model } = require(path.resolve('../config.js'));
  model('Review')(sequelize, Sequelize.DataTypes, tableCount);
  await connect();
  // Need to readd this one->
  //   FOREIGN KEY (userID) REFERENCES user1(ID)
  return [tableCount, `review${tableCount}s`]
}