const express = require('express')
const dotenv = require('dotenv')
const productRoutes= require("./routes/product");
const coldroomRoutes = require("./routes/coldroom")
const addressRoutes= require("./routes/address")
const farmerRoutes= require("./routes/farmer")
const Coldroom = require('./models/coldroom')
const Address = require('./models/address')
const Farmer = require('./models/farmer');

dotenv.config({path: './config/config.env'})
const sequelize= require('./config/db');

const app = express();
app.use(express.json())




//ROUTE REGISTRATION
app.use("/api/products", productRoutes)  
app.use("/api/coldrooms", coldroomRoutes)
app.use("/api/addresses", addressRoutes)
app.use("/api/farmers", farmerRoutes)

const port= process.env.PORT || 5000

//RELATIONSHIP
Coldroom.belongsTo(Address,{
  foreignKey: {
    field: 'addressId',
    allowNull: false
  },
  onDelete: 'cascade'
})
Address.hasMany(Coldroom)

Farmer.belongsTo(Address,{
  foreignKey: {
    field: 'addressId',
    allowNull: false
  },
  onDelete: 'cascade'
})
Address.hasMany(Farmer)

sequelize.sync()
.then(()=>{
  app.listen(port)
  console.log('server starting')
})
.catch((e)=>{
    console.log('oh sorry server is crashed', e);
})
