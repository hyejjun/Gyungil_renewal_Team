const Sequelize = require('sequelize');

module.exports = class Portfolio extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            explanation : {
                type : Sequelize.STRING(200),
                allowNull : true,
            },
            file : {
                type : Sequelize.STRING(200),
                allowNull : true,
            },
            
        },{
            sequelize,
            timestamps : false,
            underscored : false,
            paranoid : false,
            modelName : 'Portfolio',
            tableName : 'portfolio',
            charset : 'utf8',
            collate : 'utf8_general_ci'
        })
    }
}