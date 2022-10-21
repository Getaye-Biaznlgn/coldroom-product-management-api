const {DataTypes} = require('sequelize');
const sequelize= require('../config/db.js')

const Wholesaler = sequelize.define('wholesaler',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
   },
   fname:{
    type:DataTypes.STRING,
    allowNull: false,
   }  ,
   lname:{
    type: DataTypes.STRING,
    allowNull: false
   },
   phoneNO: DataTypes.STRING,
   sex:DataTypes.STRING
   
});

module.exports = Wholesaler;