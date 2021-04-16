import express from 'express';
import loginRouter from './routes/loginRouter';
import movieRouter from './routes/movieRouter';

const app = express();

app.use(express.json());

app.use('/movies', movieRouter);
app.use('/login', loginRouter);

app.get('/ping', (_req, res) => {
  res.send('pong');
});

export = app;
