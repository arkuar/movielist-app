import http from 'http';
import app = require('./app');

const PORT = 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
