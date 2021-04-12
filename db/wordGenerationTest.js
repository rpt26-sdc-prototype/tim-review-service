var UsernameGenerator = require('username-generator');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

var username1 = UsernameGenerator.generateUsername();
var username2 = UsernameGenerator.generateUsername('-');

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});