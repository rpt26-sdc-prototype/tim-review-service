module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    userName: {
      type: DataTypes.STRING,
      unique: true,
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
    Users.hasMany(models.Review, { foreignKey: 'userID', onDelete: 'CASCADE' });
  };

  return Users;
};