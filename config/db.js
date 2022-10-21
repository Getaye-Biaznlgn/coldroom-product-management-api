const Sequelize= require('sequelize');

const sequelize= new Sequelize('cc','root', '',{dialect:"mysql", host:process.env.HOST}); 
 
module.exports= sequelize;