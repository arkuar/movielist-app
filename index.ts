import express from 'express';

const app = express();
app.use(express.json());

const PORT = 8000;

app.get('/', (_req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
