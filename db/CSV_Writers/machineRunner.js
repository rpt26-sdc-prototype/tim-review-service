const { userProvisions: uP, reviewProvisions: rP } = require('./config/provisions.js');
const client = require('./config/PGIndex.js');

(async () => {
  try {
    await client.connect();
    await [uP, rP].reduce(async (count, provisions) => {
      await count;
      await require('./csvMachine').call(provisions);
      return count += 1;
    }, 0)
    await client.end();
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();