'use strict';
/*
 * Dependencies
 */
const path = require('path');
const config = require(path.join('..', 'config'))


// Setting up the database connection
const knex = require('knex')({
  client: 'mysql',
  connection: config.MY_SQL_CONFIG
});

const bookshelf = require('bookshelf')(knex);


knex.schema.hasTable('profiles').then(function (exists) {
  if (!exists) {
    return knex.schema.createTable('profiles', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('gender');
      table.integer('age');
    });
  }
});


knex.schema.hasTable('addresses').then(function (exists) {
  if (!exists) {
    return knex.schema.createTable('addresses', function (table) {
      table.increments('id').primary();
      table.string('houseNumber');
      table.string('street');
      table.string('city');
      table.string('state');
      table.string('country');
      table.integer('profileId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .index();
    })
  }
});

module.exports = bookshelf;