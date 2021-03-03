var UsernameGenerator = require('username-generator');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

var username1 = UsernameGenerator.generateUsername();
var username2 = UsernameGenerator.generateUsername('-');

console.log(username1); // codgerrevolting
console.log(username2); // tautology-modest

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

// console.log(lorem.generateWords(500));
// console.log(lorem.generateSentences(5));
console.log(lorem.generateParagraphs(7));