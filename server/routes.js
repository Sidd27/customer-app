'use strict';
/**
 * Dependencies
 */
const path = require('path');
const glob = require('glob');
const config = require('./config');
const express = require('express');
const logger = require(path.join(config.PATH.APP, 'shared', 'logger')).appLog;

/**
 * Export
 */
module.exports = function (app) {

  //Create API sub router
  const api = express.Router();

  //Load API routes
  logger.info('Loading API routes...');
  glob.sync(config.PATH.APP + '/modules/**/*.routes.js').forEach(routePath => {
    logger.info('-  %s', routePath.replace(config.PATH.APP, ''));
    require(path.resolve(routePath))(api);
  });

  //Use the API router
  app.use(config.API_BASE_PATH, api);
};