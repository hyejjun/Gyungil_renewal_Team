const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sboard', {
    id: {
      autoIncrement: true,

      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    writer: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    subject: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    class_code: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sboard',
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
