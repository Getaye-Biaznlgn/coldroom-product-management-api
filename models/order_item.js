const {DataTypes} = require('sequelize');
const sequelize= require('./config/db.js')

const OrderItem = sequelize.define('order_item',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
   },
   qty: DataTypes.INTEGER,
   price: DataTypes.DOUBLE
   
});

module.exports = OrderItem;