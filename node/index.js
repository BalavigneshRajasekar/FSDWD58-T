// server.mjs
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
});

server.listen(2000);
