const Sequelize= require('sequelize');

const sequelize= new Sequelize('cold_room_management','root', '',{dialect:"mysql", host:process.env.HOST}); 
 
module.exports= sequelize;