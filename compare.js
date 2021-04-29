
export default (allReviews) => {

  const resultArr = [];

  allReviews.forEach((user) => {
    let newObj = {};
    newObj.userName = user.userName;
    newObj.playtime = user.playtime;
    newObj.productActivation = user.productActivation;
    newObj.profilePicture = user.profilePicture;
    newObj.reviewsGiven = user.reviewsGiven;
    newObj.steamLevel = user.steamLevel;
    newObj.userName = user.userName;
    newObj.userTheme = user.userTheme

    newObj.awards = user.reviews[0].awards;
    newObj.comments = user.reviews[0].comments;
    newObj.creationDate = user.reviews[0].creationDate;
    newObj.earlyAccess = user.reviews[0].earlyAccess;
    newObj.funnyCount = user.reviews[0].funnyCount;
    newObj.gameID = user.reviews[0].game;
    newObj.gamesOwned = user.reviews[0].gamesOwned;
    newObj.helpfulCount = user.reviews[0].helpfulCount;
    newObj.helpfulScore = user.reviews[0].helpfulScore;
    newObj.notHelpfulCount = user.reviews[0].notHelpfulCount;
    newObj.recommended = user.reviews[0].recommended;
    newObj.reviewText = user.reviews[0].reviewText;

    resultArr.push(newObj);
  })
  return resultArr;
}