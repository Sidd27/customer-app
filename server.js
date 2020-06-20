'use strict';

/*---------- Dependencies ----------*/
const config = require('./server/config');
const app = require('./server/app')();

/** * Configuration */
const SERVER_PORT = config.SERVER_PORT;
/** * Error handler */

var expressErrorHandler = function (err) {
  if (err.errno === 'EADDRINUSE') {
    console.log('Web server port' + SERVER_PORT + 'is already in use');
  } else {
    console.log('Web server error:');
    console.log(err);
  }
  process.exit(-1);
};

/** * Initialize express application */
console.log('Starting Express server...');
const server = app.listen(SERVER_PORT, function () {
  //Skip if no address 
  if (!this.address()) {
    return;
  }
  //Determine address 
  const host = this.address().address.replace('::', 'localhost');
  const port = this.address().port;
  const address = host + ':' + port;
  //Output success message 
  console.log('Express server started http://' + address);
});

server.on('error', expressErrorHandler);