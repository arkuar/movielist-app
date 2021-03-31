import 'module-alias/register';
import express from 'express';
import path from 'path';
import chokidar from 'chokidar';
import { inDevelopment } from './common/config';

const app = express();
app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use('/api', (req, res, next) => require('./server')(req, res, next));

const watcher = chokidar.watch('server');
watcher.on('ready', () => {
  watcher.on('all', () => {
    Object.keys(require.cache).forEach((id) => {
      if (id.includes('server')) delete require.cache[id];
    });
  });
});

const PORT = 8000;
const DIST_PATH = path.resolve(__dirname, './dist');
const INDEX_PATH = path.resolve(DIST_PATH, 'index.html');

if (inDevelopment) {
  /* eslint-disable */
  const webpack = require('webpack');
  const middleware = require('webpack-dev-middleware');
  const hotMiddleWare = require('webpack-hot-middleware');
  const webpackConfig = require('@root/webpack.config.js');
  /* eslint-enable */
  const compiler = webpack(webpackConfig('development', { mode: 'development' }));
  app.use(middleware(compiler));
  app.use(hotMiddleWare(compiler));
  app.use('*', (_req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  app.use(express.static(DIST_PATH));
  app.get('*', (_req, res) => res.sendFile(INDEX_PATH));
}

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
