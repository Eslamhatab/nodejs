const http = require('http');
const fs = require('fs');
// const _ = require('lodash')

const server = http.createServer((req, res) => {
  res.setHeader('content-Type' , 'Text/html');
  res.write('<h1>Hello Nodejs </h1>')
  res.statusCode = 200 ;
  res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
  });