const Sequelize = require('sequelize')
const moment = require('moment')

// 추후 상품id 추가할 것
module.exports = class Auction extends Sequelize.Model{
    static init(sequelize){
        return super.init({ 
            name:{
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            price:{
                type:Sequelize.INTEGER(30),
                allowNull:false,
            },
            registeredAt:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get: function(){
                    return moment(this.getDataValue('date')).format('Y-M-D')
                }
            },
            productId:{
                type:Sequelize.INTEGER(10),
                allowNull:false,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Auction',
            tableName:'auction',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}
