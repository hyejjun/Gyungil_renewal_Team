const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('intro', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    show: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'intro',
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
    ]
  });
};
