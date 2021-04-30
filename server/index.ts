import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import loginRouter from './routes/loginRouter';
import movieRouter from './routes/movieRouter';
import reviewRouter from './routes/reviewRouter';
import userRouter from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/movies', movieRouter);
app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/reviews', reviewRouter);

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.use(errorHandler);

export = app;
