var DataTypes = require("sequelize").DataTypes;
var _board = require("./board");
var _consult = require("./consult");
var _curr_faq = require("./curr_faq");
var _curr_rv = require("./curr_rv");
var _curr_sbj = require("./curr_sbj");
var _curriculum = require("./curriculum");
var _history = require("./history");
var _hit = require("./hit");
var _intro = require("./intro");
var _main_rv = require("./main_rv");
var _portfolio = require("./portfolio");
var _subject = require("./subject");
var _teacher = require("./teacher");
var _users = require("./users");

function initModels(sequelize) {
  var board = _board(sequelize, DataTypes);
  var consult = _consult(sequelize, DataTypes);
  var curr_faq = _curr_faq(sequelize, DataTypes);
  var curr_rv = _curr_rv(sequelize, DataTypes);
  var curr_sbj = _curr_sbj(sequelize, DataTypes);
  var curriculum = _curriculum(sequelize, DataTypes);
  var history = _history(sequelize, DataTypes);
  var hit = _hit(sequelize, DataTypes);
  var intro = _intro(sequelize, DataTypes);
  var main_rv = _main_rv(sequelize, DataTypes);
  var portfolio = _portfolio(sequelize, DataTypes);
  var subject = _subject(sequelize, DataTypes);
  var teacher = _teacher(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  curr_faq.belongsTo(board, { as: "board", foreignKey: "board_id"});
  board.hasMany(curr_faq, { as: "curr_faqs", foreignKey: "board_id"});
  curr_rv.belongsTo(board, { as: "board", foreignKey: "board_id"});
  board.hasMany(curr_rv, { as: "curr_rvs", foreignKey: "board_id"});
  hit.belongsTo(board, { as: "board", foreignKey: "board_id"});
  board.hasMany(hit, { as: "hits", foreignKey: "board_id"});
  main_rv.belongsTo(board, { as: "rv", foreignKey: "rv_id", targetKey: 'id'});
  board.hasMany(main_rv, { as: "main_rvs", foreignKey: "rv_id", sourceKey:"id"});
  curr_faq.belongsTo(curriculum, { as: "curr", foreignKey: "curr_id"});
  curriculum.hasMany(curr_faq, { as: "curr_faqs", foreignKey: "curr_id"});
  curr_rv.belongsTo(curriculum, { as: "curr", foreignKey: "curr_id"});
  curriculum.hasMany(curr_rv, { as: "curr_rvs", foreignKey: "curr_id"});
  curr_sbj.belongsTo(curriculum, { as: "curr", foreignKey: "curr_id"});
  curriculum.hasMany(curr_sbj, { as: "curr_sbjs", foreignKey: "curr_id"});
  curr_sbj.belongsTo(subject, { as: "sbj", foreignKey: "sbj_id"});
  subject.hasMany(curr_sbj, { as: "curr_sbjs", foreignKey: "sbj_id"});
  users.hasMany(board, { as: "boards", foreignKey: "writer", sourceKey: 'userid' });
  board.belongsTo(users, { as: "writer_user", foreignKey: "writer", targetKey: 'userid' });
  users.belongsTo(curriculum, { as: "code", foreignKey: "class_code",sourceKey:"id" });
 curriculum.hasMany(users, { as: "users", foreignKey: "class_code", targetKey:"id"});

  return {
    board,
    consult,
    curr_faq,
    curr_rv,
    curr_sbj,
    curriculum,
    history,
    hit,
    intro,
    main_rv,
    portfolio,
    subject,
    teacher,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
