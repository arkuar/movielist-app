import express from 'express';
import path from 'path';

const app = express();
app.use(express.json());

const PORT = 8000;
const DIST_PATH = path.resolve(__dirname, './dist');
const INDEX_PATH = path.resolve(DIST_PATH, 'index.html');

app.use(express.static(DIST_PATH));
app.get('*', (_req, res) => res.sendFile(INDEX_PATH));

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
