const {
  utils: {
    logs: { log },
    csvUtils: { provisions: { userProvisions: uP, reviewProvisions: rP } },
  },
  csvMachine,
} = require('./machineConfig.js');

(async () => {
  try {
    await [uP, rP].reduce(async (count, provision) => {
      await count
      // If there are documents already, drop the collection and start over.
      const docTest = await provision.model.estimatedDocumentCount();
      if (docTest > 0) {
        await provision.model.collection.drop();
      };
      // Here we go...
      await csvMachine.call(provision);
      return count += 1;
    }, 0)
  } catch (err) {
    log(err);
  }
  log('done'.cyan)
  process.exit(1);
})()