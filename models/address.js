const {DataTypes} = require('sequelize');
const sequelize= require('./config/db.js')

const Address = sequelize.define('address',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
   },
   region: {
    allowNull:false,
    type:DataTypes.STRING},
   woreda: {
    allowNull:false,
    type:DataTypes.STRING},
   kebele: {
    allowNull:false,
    type:DataTypes.STRING},
   
});

module.exports = Address;