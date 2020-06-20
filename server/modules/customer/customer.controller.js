'use strict';
// Models
const Customer = require('./customer.model').Profile;
const ERRORS = require('./customer.constants').ERRORS;

/* ------------- Get All Customer ID -------------*/

const getAll = async function (req, res) {
  try {
    const data = await Customer.fetchAll();
    res.json(data);
  } catch (error) {
    req.log.error(error);
    res.status(500).send({
      message: ERRORS.GENERIC_500
    })
  }
};

/* ------------- Get Addresses By Customer ID -------------*/

const getAddressesByCustomerId = async function (req, res) {
  try {
    if (!req.params.id) {
      res.status(400).send({
        'message': ERRORS.CUSTOMER_ID_EMPTY
      })
    }
    const data = await Customer.where("id", req.params.id).fetch({
      withRelated: ["address"]
    });
    res.json(data.related("address").toJSON());
  } catch (error) {
    req.log.error(error);
    res.status(500).send({
      message: ERRORS.GENERIC_500
    })
  }
};

exports.getAll = getAll;
exports.getAddress = getAddressesByCustomerId;
