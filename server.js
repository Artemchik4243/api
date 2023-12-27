const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();
class API {
  constructor() {
    this.server = server;
    this.router = router;
    this.middlewares = middlewares;
    this.setup();
  }
  setup() {
    this.server.use(this.middlewares);
    this.server.use(jsonServer.bodyParser);
    this.server.use((req, res, next) => {
      if (req.method === 'POST') {
        req.body.createdAt = Date.now();
      }
      next();
    });
    this.server.use(this.router);
  }
  start(port) {
    this.server.listen(port, () => {
      console.log(`API is running on port ${port}`);
    });
  }
}
module.exports = API;
