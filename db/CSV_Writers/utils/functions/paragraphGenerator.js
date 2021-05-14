const fs = require('fs');
const path = require('path');
const PromiseX = require('bluebird');
const { lorem } = require('../data_functions/randomWordGeneration');
const txtgen = require('txtgen');

const { generateInBetweenSync } = require
  (path.resolve('../data_functions/randomMathGeneration'));

(async () => {
  fs.writeFileSync('../../Read_Write_Files/reviews.json', '');

  const stream = fs.createWriteStream("../../Read_Write_Files/reviews.json", { flags: 'a' });

  stream.write('{');

  // for (let i = 0; i < 40; i++) {
  let twoHundredFiftyStr = '';
  await PromiseX.each([...new Array(1000)], async (x, index, arrLength) => {
    const entry = (index === (arrLength - 1)) ? `"${index + 1}": "${lorem.generateParagraphs(generateInBetweenSync(1))}"}` : `"${index + 1}": "${lorem.generateParagraphs(generateInBetweenSync(1))}",`;
    twoHundredFiftyStr += entry;
    (async function () {
      await new Promise((resolve, reject) => {
        stream.write(twoHundredFiftyStr);
        twoHundredFiftyStr = '';
        resolve();
      });
    }());
  })
  // }
  stream.end();
  process.exit(1)
})();