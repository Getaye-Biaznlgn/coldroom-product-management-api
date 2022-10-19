const {DataTypes} = require('sequelize');
const sequelize= require('./config/db.js')

const OrderLog = sequelize.define('order_log',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
   },
   paid_amount: DataTypes.DOUBLE
   
});

module.exports = OrderLog;