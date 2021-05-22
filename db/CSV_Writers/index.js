(async () => {
  try {
    await require('./User_Utils/usersCSVMachine.js')();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  try {
    await require('./Review_Utils/reviewsCSVMachine.js')();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();