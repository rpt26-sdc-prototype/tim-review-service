module.exports = (sequelize, DataTypes, tableCount) => {
      const Users = sequelize.define(`user${tableCount}`, {
        userName: {
          type: DataTypes.STRING,
          // unique: true,
        },
        profilePicture: {
          type: DataTypes.STRING,
        },
        userTheme: {
          type: DataTypes.INTEGER,
        },
        steamLevel: {
          type: DataTypes.INTEGER,
        },
        reviewsGiven: {
          type: DataTypes.INTEGER,
        },
        playtime: {
          type: DataTypes.INTEGER,
        },
        productActivation: {
          type: DataTypes.INTEGER,
        },
        gamesOwned: {
          type: DataTypes.INTEGER,
        },
      }, {});

      Users.associate = function (models) {
        Users.hasMany(models, { foreignKey: 'userID', onDelete: 'CASCADE' });
      };

      return Users;
    };