// there are other web framework - Koa, salis,js, Meteor
const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('root page!');
});

server.get('/about', (req, res) => {
  res.send('about page!');
});

server.listen(4242, () => {
  console.log('Server is running...');
});