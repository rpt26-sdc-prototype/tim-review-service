module.exports = {
  generateInBetweenSync: (max) => Math.ceil(Math.random() * max),
  threeValProb: (num1, num2) => {
    const random = Math.random();
    return (random <= num1) ? 0 : (random <= num2) ? 1 : 2
  },
  twoValProb: (num1) => (Math.random() <= num1) ? 0 : 1,

  randomString: (length = 10) => Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1),
};