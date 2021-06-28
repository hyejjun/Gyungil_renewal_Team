const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('curriculum', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    info: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    term: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "09:00:00"
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "18:00:00"
    },
    location: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tuition: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    qual: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    show: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    image: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'curriculum',
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
