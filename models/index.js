'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const initModels = require('./init-models');

const Portfolio = require('./portfolio');

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let models = initModels(sequelize);


// db.Portfolio = Portfolio;


// Portfolio.init(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.board = models.board;
db.consult = models.consult;
db.History = models.history;
db.teacher = models.teacher;
db.curriculum = models.curriculum;
db.subject = models.subject;
db.sboard = models.sboard;
db.intro = models.intro;
db.User = models.users;
db.curr_sbj = models.curr_sbj;
db.curr_rv = models.curr_rv;
db.main_rv = models.main_rv;
db.hit = models.hit;


// curr_faq,

module.exports = db;
