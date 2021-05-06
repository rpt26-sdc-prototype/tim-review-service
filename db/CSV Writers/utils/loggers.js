module.exports = {
  smallBatchUpdates: (i) => {
    if (((i + 1) / 10) % 1 === 0) {
      console.log(((i + 1) * 2.5) + '%')
      if (((i + 1) / 40) % 1 === 0) {
        console.log(`Inserting...`.yellow)
      }
    }
  },
  logPerformanceMetrics: (start, end, uSBBN, perfArr) => {
    const difference = (((end - start) / 1000));
    perfArr.push(Number(difference));
    const trending = perfArr.reduce((total, item) => {
      total += item;
      return total;
    }, 0);

    avgPerformance = trending / perfArr.length;
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
  }

};