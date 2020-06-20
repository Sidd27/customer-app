'use strict';

/**
 * Get base environment to extend from
 */
const base = require('./base');

/**
 * Environment configuration (development)
 */
module.exports = Object.assign({}, base, {

  //API
  API_BASE_PATH: '/api/',

  //Server
  SERVER_PORT: 9001,

  //Database
  MY_SQL_CONFIG: {
    host: 'localhost',
    user: 'customerUser',
    password: 'customerPassword',
    database: 'customer',
    charset: 'utf8'
  }

});