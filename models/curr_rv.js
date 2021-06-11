const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curr_rv', {
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
    rv_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sboard',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'curr_rv',
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
        name: "FK__sboard",
        using: "BTREE",
        fields: [
          { name: "rv_id" },
        ]
      },
    ]
  });
};
