const { log } = console;
module.exports = {
  logBatchUpdates: (name, index, total) => {
    log(`<--- ${name} Batch ${(index + 1)}/${total}--->`.yellow);
  },
  logPerformanceMetrics: (start, generationTime, insertionTime, cb) => {
    const generationTimeSeconds = ((generationTime - start) / 1000).toFixed(2);
    const generationTimeMinutes = (generationTimeSeconds / 60).toFixed(2);

    const insertionTimeSeconds = ((insertionTime - generationTime) / 1000).toFixed(2);
    const insertionTimeMinutes = (insertionTimeSeconds / 60).toFixed(2);

    const totalElapsedTimeSeconds = (((insertionTime - start) / 1000)).toFixed(2);
    const totalElapsedTimeMinutes = (totalElapsedTimeSeconds / 60).toFixed(2);

    log('<-- Seeding Complete! -->'.green);

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
    cb();
  },

  logVictoryMessage: (title) => {
    log(`
                                         <-- ${title} Table Populated -->
    `.rainbow);
    log('Ending timestamp (Bottom of file)--> ' + new Date(Date.now()).toString());
  },
  log: log
};


// perfArr.push(Number(difference));
// const trending = perfArr.reduce((a, b) => a + b, 0)
// const avgPerformance = trending / perfArr.length;
// const totalEstTime = (avgPerformance * uSBBN) / 60;

// Total Estimated Seeding Time- ${(totalEstTime).toFixed(2)} Mins.
// Average Batch execution- ${(trending / perfArr.length).toFixed(2)} Secs
// Est Remaining Time ${(totalEstTime - totalElapsedTime).toFixed(2)} Mins