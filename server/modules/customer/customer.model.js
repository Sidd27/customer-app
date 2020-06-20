/**
 * Dependencies
 */

const Customer = require('../../db/customer.db');

// Defining models
const Profile = Customer.model('Profile', {
  tableName: 'profiles',
  address() {
    return this.hasMany(Address, "profileId", "id")
  }
});

const Address = Customer.model('Address', {
  tableName: 'addresses',
  customer() {
    return this.belongsTo('Customer')
  }
})


exports.Address = Address;
exports.Profile = Profile;
