const http = require('http');

/*const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});*/

const requestListener = (req, res) => {
  //console.dir(req, {depth: 0});
  //console.log(req.url);
  console.log(res, {depth: 0});
  res.write('Hello Node\n');
  res.end();
};
/*const server = http.createServer(requestListener);*/

const server = http.createServer();

server.on("request", requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});