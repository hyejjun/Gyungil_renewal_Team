const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('curr_faq', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    curr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'curriculum',
        key: 'id'
      }
    },
    board_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'board',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'curr_faq',
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_curr_faq_board",
        using: "BTREE",
        fields: [
          { name: "board_id" },
        ]
      },
      {
        name: "FK_curr_faq_curriculum",
        using: "BTREE",
        fields: [
          { name: "curr_id" },
        ]
      },
    ]
  });
};
