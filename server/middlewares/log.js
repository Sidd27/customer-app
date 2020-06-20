'use strict';
/**
 * Dependencies
 */
const path = require('path');
const config = require(path.join('..', 'config'));
const logger = require(path.join(config.PATH.APP, 'shared', 'logger'));

function requestLogger(req, res, next) {
  logger.accessLog.info({
    req: req
  });
  next();
}

function attachLogger(req, res, next) {
  req.log = logger.appLog;
  next();
}

exports.requestLogger = requestLogger;
exports.attachLogger = attachLogger;