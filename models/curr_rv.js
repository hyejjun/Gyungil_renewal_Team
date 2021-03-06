const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('curr_rv', {
    int: {
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
    tableName: 'curr_rv',
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "int" },
        ]
      },
      {
        name: "FK__curriculum",
        using: "BTREE",
        fields: [
          { name: "curr_id" },
        ]
      },
      {
        name: "FK__board",
        using: "BTREE",
        fields: [
          { name: "board_id" },
        ]
      },
    ]
  });
};
