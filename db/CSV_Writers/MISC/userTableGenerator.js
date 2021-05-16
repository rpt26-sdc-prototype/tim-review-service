const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');

// I'm not creating tables anymore because I don't need them, still keeping this just in case
module.exports = async (tableCount, perfArr) => {
  if ((perfArr.length / 5) % 1 !== 0) {
    return [tableCount, `user${tableCount}s`];
  }
  tableCount++;
  console.log(`Creating new User table: ${tableCount}`);

  const { sequelize, connect, model } = require(path.resolve('../config.js'));
  model('User')(sequelize, Sequelize.DataTypes, tableCount);
  await connect();
  return [tableCount, `user${tableCount}s`];
};