module.exports = {
  logSmallBatchUpdates: (i) => {
    if (((i + 1) / 10) % 1 === 0) {
      console.log(((i + 1) * 2.5) + '%')
      if (((i + 1) / 40) % 1 === 0) {
        console.log(`Inserting...`.yellow)
      }
    }
  },
  logBigBatchUpdates: (index, total) => {
    console.log(`<--- User Big Batch ${(index + 1)}/${total}--->`.yellow);
  },
  logPerformanceMetrics: (start, end, uSBBN, perfArr) => {
    const difference = (((end - start) / 1000));
    perfArr.push(Number(difference));
    const trending = perfArr.reduce((a, b) => a + b, 0)
    const avgPerformance = trending / perfArr.length;
    const totalEstTime = (avgPerformance * uSBBN) / 60;
    const totalElapsedTime = trending / 60;
    console.log('<-- Batch Complete! -->'.green)
    console.log(`
      Batch Took ${(difference).toFixed(2)} seconds!
      Average Batch execution- ${(trending / perfArr.length).toFixed(2)} Secs
      Total Estimated Seeding Time- ${(totalEstTime).toFixed(2)} Mins.
      Total Elapsed Time- ${(totalElapsedTime).toFixed(2)} Mins.
      Est Remaining Time ${(totalEstTime - totalElapsedTime).toFixed(2)} Mins
      `.cyan
    );
    return perfArr;
  },
  logVictoryMessage: () => {
    console.log(' \n Users Table Populated \n ');
    console.log('Ending timestamp (Bottom of file)--> ' + new Date(Date.now()).toString());
  }

};