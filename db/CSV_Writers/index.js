(async () => {
  try {
    await require('./User_Utils/usersCSVWriter.js')();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  try {
    await require('./Review_Utils/reviewsCSVWriter.js')();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();