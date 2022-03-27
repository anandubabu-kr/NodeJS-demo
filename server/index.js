// run `node index.js` in the terminal
console.log(`Node.js v${process.versions.node}!`);

function mercury(msg, msgfun) {
  msgfun(`Hello ${msg}, welcome to mercury `);
}

mercury('Astro', (replay) => {
  console.log(`$REPLAY : ${replay}`);
});

// -----------------------------------------
/**
 * Setting up a HTTP server
 * 1. import httip modue
 * 2. Set a IP/hostname and specify a port number to listen
 * 3. Use http.createServert methode.
 * 4. let your server to listen for the port :)
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  /**
   * - createServer methode has two parameters (req,res)
   * - Specify a header and status code for res object
   * - send the res object by res.end() methode
   */

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World !! \n');
});

/**
 * - server.listen methode has three parameters (port,hostname,call back)
 * - callback is executed when server is running
 */

server.listen(port, hostname, () => {
  console.log(`Server up and running at http://${hostname}:${port}`);
});
