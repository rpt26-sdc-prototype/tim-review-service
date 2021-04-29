'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      game: {
        type: Sequelize.INTEGER,
      },
      userID: {
        type: Sequelize.INTEGER,
      },
      reviewText: {
        type: Sequelize.STRING(8000),
      },
      creationDate: {
        type: Sequelize.BIGINT,
      },
      recommended: {
        type: Sequelize.INTEGER,
      },
      helpfulCount: {
        type: Sequelize.INTEGER,
      },
      notHelpfulCount: {
        type: Sequelize.INTEGER,
      },
      helpfulScore: {
        type: Sequelize.INTEGER,
      },
      funnyCount: {
        type: Sequelize.INTEGER,
      },
      earlyAccess: {
        type: Sequelize.INTEGER,
      },
      awards: {
        type: Sequelize.INTEGER,
      },
      comments: {
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
    await queryInterface.dropTable('reviews');
  }
};

  // FOREIGN KEY(userID) REFERENCES users(ID)
