'use strict';
/**
 * Dependencies
 */
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const config = require('./config');
const log = require(path.join(config.PATH.APP, 'middlewares', 'log'));
const routes = require(path.join(config.PATH.APP, 'routes'));
const db = require('./db/customer.db');


module.exports = function () {
  //Initialize express app
  const app = express();

  // parse application/json 
  app.use(bodyParser.json());
  // Set Static Path
  app.use(express.static(path.join(config.PATH.APP, 'dist')));

  // Help protect from some well-known security vulnerabilities
  app.use(helmet());

  // used for attaching logger to req method(ex-> req.log.info('example')) 
  app.use(log.requestLogger);
  app.use(log.attachLogger);

  //Set global headers
  app.all('/*', (req, res, next) => {
    res.header('X-Version', config.APP_VERSION);
    next();
  });

  // Routes middleware 
  routes(app);
  //Return express server instance 
  return app;
};