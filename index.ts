import 'module-alias/register';
import http from 'http';
import { PORT } from '@common/config';
import app = require('./app');

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
