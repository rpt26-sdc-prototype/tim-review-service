module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('reviews', {
    game: {
      type: DataTypes.INTEGER,
    },
    userID: {
      type: DataTypes.INTEGER,
    },
    reviewText: {
      type: DataTypes.STRING(8000),
    },
    creationDate: {
      type: DataTypes.BIGINT,
    },
    recommended: {
      type: DataTypes.INTEGER,
    },
    helpfulCount: {
      type: DataTypes.INTEGER,
    },
    notHelpfulCount: {
      type: DataTypes.INTEGER,
    },
    helpfulScore: {
      type: DataTypes.INTEGER,
    },
    funnyCount: {
      type: DataTypes.INTEGER,
    },
    earlyAccess: {
      type: DataTypes.INTEGER,
    },
    awards: {
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.INTEGER,
    },
  }, {timestamps: false});

  return Reviews;
};