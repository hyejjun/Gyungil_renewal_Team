const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userid : {
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : true,
            },
            userpw : {
                type : Sequelize.STRING(200),
                allowNull : false,
            },
            username : {
                type : Sequelize.STRING(10),
                allowNull : false,
            },
            useremail : {
                type : Sequelize.STRING(30),
                allowNull : false,
            },
            user_birthday : {
                type :Sequelize.STRING(20),
                allowNull : false,
            },
            user_tel :{
                type :Sequelize.STRING(20),
                allowNull : false,
            },
            class_code :{
                type : Sequelize.INTEGER(11).UNSIGNED,
                allowNull : false,
            }
        },{
            sequelize,
            timestamps : false,
            underscored : false,
            paranoid : false,
            modelName : 'User',
            tableName : 'users',
            charset : 'utf8',
            collate : 'utf8_general_ci'
        })
    }
}