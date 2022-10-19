const {DataTypes} = require('sequelize');
const sequelize= require('./config/db.js')

const Order = sequelize.define('Order',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
   },
   paymentStatus: DataTypes.STRING,
   orderStatus:DataTypes.STRING,
   paidAmount: DataTypes.STRING,
   totalPrice: DataTypes.DOUBLE,
});

module.exports = Order;