'use strict';
const customerController = require('./customer.controller');

module.exports = function (router) {
  router.get('/customer', customerController.getAll);
  router.get('/customer/:id/address', customerController.getAddress);
}