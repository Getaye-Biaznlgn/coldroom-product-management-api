const {DataTypes} = require('sequelize');
const sequelize= require('./config/db.js')

const FarmerProductSale = sequelize.define('farmer_product_sale',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
     
   },
   quantity:{
    type:DataTypes.STRING,
    allowNull:false
   } ,
   price:{
       type: DataTypes.DOUBLE,
       allowNull: false
   },
   state: DataTypes.STRING,
});

module.exports = FarmerProductSale;