module.exports = (sequelize, DataTypes) => {
  const Users2 = sequelize.define('users2', {
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

  Users2.associate = function (models) {
    Users2.hasMany(models.Review, { foreignKey: 'userID', onDelete: 'CASCADE' });
  };
  return Users2;
};