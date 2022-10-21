const {DataTypes} = require('sequelize');
const sequelize= require('../config/db.js')

const ColdroomProduct = sequelize.define('coldroom_product',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
   },
   price: {
    type:DataTypes.DOUBLE, 
    allowNull: false
   } 
});

module.exports = ColdroomProduct;