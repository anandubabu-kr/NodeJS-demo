// run `node index.js` in the terminal

const fs = require('fs');

console.log(`Node.js v${process.versions.node}!`);

function mercury(msg, msgfun) {
  msgfun(`Hello ${msg}, welcome to mercury `);
}

mercury('Astro', (replay) => {
  console.log(`$REPLAY : ${replay}`);
});

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<h1>Hello friends</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server up and running at http://${hostname}:${port}`);
});
