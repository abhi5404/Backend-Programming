const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.end('This is the about page');
  } else if (req.url === '/contact') {
    res.end('This is the contact page');
  }
  else if (req.url === '/cat') {
    var catMe = require('cat-me');
    res.end(catMe());
  } 
  
  else {
    res.end('Welcome to our homepage');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
