const http = require('http');
const fs = require('fs');
// const _ = require('lodash')

const server = http.createServer((req, res) => {
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
  });