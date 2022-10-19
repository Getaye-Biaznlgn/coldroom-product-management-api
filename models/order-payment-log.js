const {DataTypes} = require('sequelize');
const sequelize= require('./config/db.js')

const OrderPaymentLog = sequelize.define('order_payment_log',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
   },
   paid_amount: DataTypes.DOUBLE
   
});

module.exports = OrderPaymentLog;