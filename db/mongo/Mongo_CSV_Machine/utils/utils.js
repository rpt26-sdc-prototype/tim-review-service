const {
  packages: { performance, path: { resolve: resolvePath } },
  utils: {
    logs: { log, logBatchUpdates },
    random: { generateInBetweenSync: gIBS, randomString: rS, twoValProb: tVP, threeValProb: rEVP },
    exec
  },
  userConstraints, reviewConstraints,
  models: { User, Review },
  tableKeys: { userTableKeys, reviewTableKeys },
} = require('../../machineConfig.js');


module.exports = {
  provisions: {
    userProvisions: {
      template: (link) => `${"'" + rS(10) + "'"},${module.exports.insertionArr[(gIBS(250))]},${gIBS(10)},${gIBS(100)},${gIBS(20)},${gIBS(125)},${gIBS(80)},${gIBS(2)}` + '\r\n',
      title: 'users',
      keys: userTableKeys,
      model: User,
      constraints: userConstraints
    },
    reviewProvisions: {
      template: () => {
        const primaryRecordNumber = 10000000;
        const _usersRecordsNumber = 25000000;
        const helpfulCount = gIBS(100);
        const notHelpfulCount = gIBS(10);
        const creationDate = (1616535988000 - (gIBS(31536000000)));
        const helpfulScore = helpfulCount / (helpfulCount + notHelpfulCount) * 100;
        return `${gIBS(primaryRecordNumber)},${gIBS(_usersRecordsNumber)},${module.exports.paragraphGetter(gIBS(1), module.exports.paragraphs)},${creationDate},${tVP(.15)},${helpfulCount},${notHelpfulCount},${helpfulScore},${rEVP(.7, .8)},${rEVP(.7, .9)},${tVP(.9)},${gIBS(20)}` + `\r\n`
      },
      title: 'reviews',
      keys: reviewTableKeys,
      model: Review,
      constraints: reviewConstraints
    },
  },
  paragraphGetter: (numOfPs, paragraphs) => {
    return [...new Array(numOfPs)].map(num => paragraphs[gIBS(1000)]).join('');
  },

  drainWriter: async (writer, { template, title, constraints: { _totalRecordsNumber: _tRN, _totalStatusUpdates: _tSU, statusUpdateInterval: sUI } }, encoding, callback) => {
    return new Promise((resolve, reject) => {
      let i = _tRN;
      const write = async () => {
        let ok = true;
        do {
          if ((i / sUI) % 1 === 0) {
            logBatchUpdates(title, _tSU - (i / sUI), (_tRN / sUI));
          }
          i--;
          if (i === 0) {
            // Last time!
            writer.write(template(), encoding);
            callback(writer, resolve)
          }
          else {
            // See if we should continue, or wait.
            // Don't pass the callback, because we're not done yet.
            ok = writer.write(template(), encoding);
          }
        } while (i > 0 && ok);
        if (i > 0) {
          // Had to stop early!
          // Write some more once it drains.
          writer.once('drain', () => {
            write()
          });
        }
      };
      write();
    });
  },

  drainWriterCB: (writer, resolve) => {
    writer.on('finish', async () => {
      log('Generation Complete');
      // performance.now gets sent back to the CSVMachine file for performance metrics.
      resolve(performance.now());
    })
    writer.end();
  },

  insertionUpdates: async (number, model) => {
    const totalCurrentRecords = await model.estimatedDocumentCount();
    if (totalCurrentRecords !== number) {
      number = totalCurrentRecords;
      if ((number / 100000) % 1 === 0) {
        console.log(`Inserting... ${(100 / 25) * (number / 1000000)}% complete`)
      }
    }
    module.exports.insertionUpdates(number, model);
  },

  dBQuery: async ({ title, keys, model }) => {
    const command = `mongoimport -d ReviewsService -c ${title} --type csv --file ${resolvePath('Mongo_CSV_Machine/Read_Write_Files/newBatch.csv')} -f ${keys} --numInsertionWorkers 4`;

    module.exports.insertionUpdates(0, model);

    try {
      const insertionTime = await new Promise((resolve, reject) => {
        exec(command, (err) => {
          if (err) {
            console.log(err);
          }
          resolve(performance.now());
        })
      })
      return insertionTime;
    } catch (err) {
      log(err)
    }
  },

};

module.exports.insertionArr = require('../Read_Write_Files/profileLinks.json');
module.exports.paragraphs = require('../Read_Write_Files/reviews.json');


