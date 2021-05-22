const {
  packages: { mongoose, mongoose: { connection: db }
  }
} = require('./machineConfig.js');

mongoose.connect('mongodb://localhost/ReviewsService', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on('error', () => { console.log('error') });
db.once('open', () => {
  console.log(`mongoose successfully connected`);
})

module.exports = db;