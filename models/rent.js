const {DataTypes} = require('sequelize');
const sequelize= require('../config/db.js')

const Rent = sequelize.define('rent',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
   },
   price:{
   type: DataTypes.DOUBLE, 
    allowNull:  false
   } 
});

module.exports = Rent;