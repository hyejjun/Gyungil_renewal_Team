const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "userid"
    },
    userpw: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    useremail: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    user_birthday: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_tel: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    class_code: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    quit: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 3
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: "userid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
