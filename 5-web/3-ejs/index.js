const express = require('express');

const server = express();

// there are other view engines: Pugjs, Handlebars, react+jsx
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/about', (req, res) => {
  res.render('about');
});

server.listen(4242, () => {
  console.log('Server is running...');
});