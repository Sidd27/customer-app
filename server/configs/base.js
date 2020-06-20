'use strict';

/**
 * Get package info and server port
 */
const pkg = require('../../package.json');

/**
 * Environment configuration (base)
 */
module.exports = {

  //App
  APP_NAME: pkg.name,
  APP_VERSION: pkg.version

}