const {DataTypes} = require('sequelize');
const sequelize= require('./config/db.js')

const Employee = sequelize.define('employee',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
     
   },
   fname:{
    type:DataTypes.STRING,
    allowNull:false
   } ,
   lname:{
    type:DataTypes.STRING,
    allowNull:false
   } ,
   phoneNo:{
       type: DataTypes.DOUBLE,
       allowNull: false
   },
   role: DataTypes.STRING,
   email: DataTypes.STRING,
   sex: DataTypes.STRING
});

module.exports = Employee;