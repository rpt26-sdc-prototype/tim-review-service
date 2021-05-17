'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        // unique: true,
        allowNull: false,
      },
      profilePicture: {
        type: Sequelize.STRING,
      },
      userTheme: {
        type: Sequelize.INTEGER,
      },
      steamLevel: {
        type: Sequelize.INTEGER,
      },
      reviewsGiven: {
        type: Sequelize.INTEGER,
      },
      playtime: {
        type: Sequelize.INTEGER,
      },
      productActivation: {
        type: Sequelize.INTEGER,
      },
      gamesOwned: {
          type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
