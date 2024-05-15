const dotenv = require('dotenv');
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down....');
  console.log(err);
  // server.close(() => {
  //   process.exit(1);
  // });
});

const DB = process.env.DATABASE_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then((con) => {
  // console.log(con.connections);
  console.log('Connection is successful');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}.`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down....');
  server.close(() => {
    process.exit(1);
  });
});
