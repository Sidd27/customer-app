'use strict';
/**
 * Dependencies
 */
const bunyan = require('bunyan');
const path = require('path');
const fs = require('fs');
const config = require(path.join('..', 'config'));
const RotatingFileStream = require('bunyan-rotating-file-stream');
/**
 * Log Directories
 */
const logDirectory = path.join(config.PATH.APP, 'logs');
const accessLogDirectory = path.join(logDirectory, 'access');
const appLogDirectory = path.join(logDirectory, 'app');

function makeDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
/*---------- Logging Setup ----------*/
makeDir(logDirectory);
makeDir(accessLogDirectory);
makeDir(appLogDirectory);

const appLog = bunyan.createLogger({
  name: 'appLog',
  streams: [{
    type: 'raw',
    stream: new RotatingFileStream({
      path: appLogDirectory + '/%d-%b-%y.log',
      period: '1d', // daily rotation 
      totalFiles: 10, // keep 10 back copies 
      rotateExisting: true, // Give ourselves a clean file when we start up, based on period 
      threshold: '1m', // Rotate log files larger than 10 megabytes 
      totalSize: '20m' // Don't keep more than 20mb of archived log files 
    })
  }, {
    stream: process.stdout
  }]
});

const accessLog = bunyan.createLogger({
  name: 'accessLog',
  serializers: bunyan.stdSerializers,
  streams: [{
    type: 'raw',
    stream: new RotatingFileStream({
      path: accessLogDirectory + '/%d-%b-%y.log',
      period: '1d', // daily rotation 
      totalFiles: 10, // keep 10 back copies 
      rotateExisting: true, // Give ourselves a clean file when we start up, based on period 
      threshold: '1m', // Rotate log files larger than 10 megabytes 
      totalSize: '20m', // Don't keep more than 20mb of archived log files 
      gzip: true // Compress the archive log files to save space 
    })
  }]
});

exports.appLog = appLog;
exports.accessLog = accessLog;