'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Auction = require('./auction');
const Items = require('./items');

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Auction = Auction;
db.Items = Items;
Auction.init(sequelize);
Items.init(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
