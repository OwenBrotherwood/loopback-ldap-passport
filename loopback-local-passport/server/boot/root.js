module.exports = function(server) {
  console.log("./boot/root.js is disabled");
  // Install a `/` route that returns server status
/*
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
*/
};
