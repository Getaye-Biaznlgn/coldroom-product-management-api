const {DataTypes} = require('sequelize');
const sequelize= require('./config/db.js')

const FarmerProduct = sequelize.define('farmer_product',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,  
   },
   quality: {
    type: DataTypes.STRING,
    allowNull: false
   } ,
   productionDate: {
    type: DataTypes.DATE,
    allowNull: false
   },
   productSku: {
   type: DataTypes.STRING,
   allowNull: false
   } ,
   quantity:{
    type: DataTypes.INTEGER,
     allowNull: false,
   },

   addedDate:DataTypes.DATE
   
});

module.exports = FarmerProduct;