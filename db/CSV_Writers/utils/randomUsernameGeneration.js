// base 36 function...
// https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
module.exports = {
  randomString: (length) => Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1),
};