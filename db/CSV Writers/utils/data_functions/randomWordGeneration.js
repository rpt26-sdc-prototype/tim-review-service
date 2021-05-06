var Promise = require('bluebird');
const LoremIpsum = Promise.promisifyAll(require('lorem-ipsum').LoremIpsum);

module.exports.lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});