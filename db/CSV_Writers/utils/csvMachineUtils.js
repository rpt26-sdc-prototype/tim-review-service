const {
  packages: { fs, path, performance },
  logs: { log, logGenerationUpdates }
} = require('../config/config.js');

module.exports = {
  drainWriter: async ({ title, template, constraints: { _totalRecordsNumber, statusUpdateInterval, primaryRecordNumber: pRN, _userRecordsNumber: _uRN } }) => {
    return new Promise((resolve, reject) => {
      let [i, writer] = [_totalRecordsNumber, fs.createWriteStream(path.resolve('Read_Write_Files/records.csv'))]
      const write = async () => {
        let ok = true;
        do {
          if ((i / statusUpdateInterval) % 1 === 0) {
            logGenerationUpdates(title, _totalRecordsNumber, i);
          }
          i--;
          if (i === 0) {
            writer.write(template(pRN, _uRN), () => {
              writer.on('finish', () => {
                log('CSV Data Generation Complete');
                // performance.now gets sent back to the CSVMachine file for performance metrics.
                resolve(performance.now());
              })
              writer.end();
            });
          } else {
            ok = writer.write(template(pRN, _uRN));
          }
        } while (i > 0 && ok);
        if (i > 0) {
          writer.once('drain', write);
        }
      };
      write();
    });
  },

  postDBQuery: async ({ title, dBResetStr, dBQueryStr, dBCountStr }) => {
    try {
      const client = require(path.resolve(`config/PGIndex.js`));
      await client.query(dBResetStr);
      await client.query(dBQueryStr);
    } catch (err) {
      log(err);
    }
    return performance.now();
  }
};

// Notes for Journal
// Changing from Promise.each to arr.reduce for reviews small batch generation reduced insertion time of 1 million records from 36.95 seconds to 14.49 seconds.
// Adding 4 Insertion Workers to mongoimport and running mongod --nojournal cut time over normal mongoimport from 4.92 to 2.64 minutes for 5 million records. (https://www.khalidalnajjar.com/insert-200-million-rows-into-mongodb-in-minutes/#:~:text=mongoimport%20has%20to%20convert%20the,format%20might%20increase%20the%20speed.)