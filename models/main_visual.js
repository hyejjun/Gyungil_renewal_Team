const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('main_visual', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    show: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'main_visual',
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
