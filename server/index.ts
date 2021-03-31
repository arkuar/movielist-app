import express from 'express';

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

module.exports = app;
