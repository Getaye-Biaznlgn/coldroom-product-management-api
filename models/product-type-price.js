const {DataTypes} = require('sequelize');
const sequelize= require('./config/db.js')

const ProductTypePrice = sequelize.define('product_type_price',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
   },
   price: DataTypes.DOUBLE,
   
   
});

module.exports = ProductTypePrice;