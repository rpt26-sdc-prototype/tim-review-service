require('dotenv').config({ path: __dirname + '/../.env' });
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_URL,
  dialect: 'mysql',
  logging: false,
});
const connect = async (tableCount) => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection to the database has been established successfully.');
  }
  catch (error) {
    console.error(error.message);
    process.exit(-1);
  }
};

const model = name => database.models[name];
const User = require(`./models/users_model.js`);
const User2 = require(`./models/users_model.js`)(sequelize, Sequelize.DataTypes);
const Review = require('./models/reviews_model.js');


module.exports = (database) = {
  sequelize: sequelize,
  models: { User, Review },
  connect,
  model,
};

