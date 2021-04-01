require('dotenv').config()
const app = require('./app');

const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });

const PORT = process.env.PORT || 4052;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});