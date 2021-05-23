const { log } = console;
module.exports = {
  logStart: (title) => {
    log('Starting time stamp (Top of User file)--> \n\n' + new Date(Date.now()).toString().blue);
    log(`\n ${title} Table Populating\n`.green);
    return require('perf_hooks').performance.now();
  },

  logGenerationUpdates: (name, total, current) => {
    console.log(`${name} generating... ${((1 - (current / total)) * 100).toFixed(0)}% complete`.yellow);
  },

  logVictoryMessage: (title, start, generationTime, insertionTime) => {
    const generationTimeSeconds = ((generationTime - start) / 1000).toFixed(2);
    const generationTimeMinutes = (generationTimeSeconds / 60).toFixed(2);

    const insertionTimeSeconds = ((insertionTime - generationTime) / 1000).toFixed(2);
    const insertionTimeMinutes = (insertionTimeSeconds / 60).toFixed(2);

    const totalElapsedTimeSeconds = (((insertionTime - start) / 1000)).toFixed(2);
    const totalElapsedTimeMinutes = (totalElapsedTimeSeconds / 60).toFixed(2);

    log(`<-- ${title} table seeding complete! -->`.green);

    log(`
    Generation Time- ${generationTimeSeconds} (seconds)
                     ${generationTimeMinutes} (minutes)`.black.greenBG
    )
    log(`
    Insertion Time - ${insertionTimeSeconds} (seconds)
                     ${insertionTimeMinutes} (minutes)
    `.black.greenBG)
    log(`
    Total Time     - ${totalElapsedTimeSeconds}(seconds)
                     ${totalElapsedTimeMinutes}(minutes)
      `.black.greenBG
    );

    log(`
                                         <-- ${title} Table Populated -->
    `.rainbow);
    log('Ending timestamp (Bottom of file)--> ' + new Date(Date.now()).toString());
  },

  log: log

};

