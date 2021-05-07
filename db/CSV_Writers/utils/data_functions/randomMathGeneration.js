module.exports = {
  generateInBetweenSync: (max) => {
    return Math.ceil(Math.random() * max);
  },
  threeValProb: (num1, num2) => {
    const random = Math.random();
    return (random <= num1) ? 0 : (random <= num2) ? 1 : 2
  },
  twoValProb: (num1) => {
    return  (Math.random(); <= num1) ? 0 : 1;
  }
};