const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curr_sbj', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    curr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'curriculum',
        key: 'id'
      }
    },
    sbj_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subject',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'curr_sbj',
    timestamps: false,
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
        name: "FK__curriculum",
        using: "BTREE",
        fields: [
          { name: "curr_id" },
        ]
      },
      {
        name: "FK__subject",
        using: "BTREE",
        fields: [
          { name: "sbj_id" },
        ]
      },
    ]
  });
};
