const {
  logs: { log, logStart, logVictoryMessage },
  utils: { drainWriter, postDBQuery }
} = require('./config/config.js');

module.exports = async function ({ title } = this) {
  try {
    const start = logStart(title);
    const generationTime = await drainWriter(this);
    const insertionTime = await postDBQuery(this);
    logVictoryMessage(title, start, generationTime, insertionTime);
  } catch (err) {
    log(err.message);
    process.exit(1);
  }
}

