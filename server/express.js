/**
 * Setting up an express server
 * 1. import express module.
 * 2. invok express methode and set an port number.
 * 3. Recive REST API requests using express app.
 * 4. Start the app listening on the port.
 */
const express = require('express');
const app = express();

const PORT = 2500;

app.get('/', (req, res) => {
  /**
   * REST API methodes has two parameters (path,callback)
   * callback methode should have rea,res parameters
   * this methode will set the statuscode, headers and response  then send the response using res.send methode
   *
   */

  res.send(
    'Ye mera jaaaan...... jeena he yahaa...... rahna hai akele ye zindki.....'
  );
});

app.listen(PORT, () => {
  console.log(`Express app is running on ${PORT}`);
});

// --------- Routing with express ------------
/**
 * Routing refers to how the application should handle/respond to a purticular end point from client
 * Client will make api request to some end points which is basically a url
 * The url can be a path as well. the request will be different to each REST full/ - get,post etc.
 */

app.get('/users', (req, res) => {
  res.send('users....  ');
});
