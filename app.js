const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})
const sequelize= require('./config/db.js')
const app = express();

  
const port= process.env.PORT || 5000

sequelize.sync()
.then(()=>{
  app.listen(port)
  console.log('server starting')
})
.catch((e)=>{
    console.log('oh sorry server is crashed', e);
})

