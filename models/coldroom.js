const {DataTypes} = require('sequelize');
const sequelize= require('../config/db')

const Coldroom = sequelize.define('coldroom',{
   id:{
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true,
   },
   name: {
    allowNull: false,
    type: DataTypes.STRING},
   lng: DataTypes.DOUBLE,
   lat: DataTypes.DOUBLE,
   
});

module.exports = Coldroom;