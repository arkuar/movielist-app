import express from 'express';
import movieRouter from './routes/movieRouter';

const app = express();

app.use(express.json());

app.use('/movies', movieRouter);

app.get('/ping', (_req, res) => {
  res.send('pong');
});

module.exports = app;
