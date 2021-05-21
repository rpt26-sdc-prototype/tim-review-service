const {
  packages: { performance, fs: { createWriteStream: cWS }, path: { resolvePath } },
  utils: {
    logs: { logPerformanceMetrics, log, logVictoryMessage },
    csvUtils: { drainWriter, drainWriterCB, dBQuery}
  }
} = require('../machineConfig.js');

module.exports = async function ({ title } = this) {
  log(`\n${title} Table Populating\n`.green);
  try {
    const start = performance.now();
    const generationTime = await drainWriter(cWS(resolvePath('Mongo_CSV_Machine/Read_Write_Files/newBatch.csv')), this, 'utf8', drainWriterCB);
    const insertionTime = await dBQuery(this);
    logPerformanceMetrics(start, generationTime, insertionTime, () => {
      logVictoryMessage(title)
    })
  } catch (err) {
    log(err);
    process.exit(1);
  }
}

