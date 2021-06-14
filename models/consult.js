const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consult', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    age: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 20
    },
    tel: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    read: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'consult',
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
    ]
  });
};
