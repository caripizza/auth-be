/* eslint-disable no-console */
const express = require('express');
const app = express();
const connection = require('./middleware/connection');
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');

app.use(require('morgan')('dev', {
  skip() {
    return process.env.NODE_ENV === 'test';
  }
}));

app.use(express.json());

app.use(connection);

app.get('/', (req, res) => {
  res.status(200).send(
    'Welcome to Cari\'s amazing Auth-Be App'
  );
});

app.use(notFound);
app.use(handler);

module.exports = app;