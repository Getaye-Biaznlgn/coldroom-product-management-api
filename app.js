const express = require('express')
const dotenv = require('dotenv')
const productRoutes= require("./routes/product");
const coldroomRoutes = require("./routes/coldroom")
const addressRoutes= require("./routes/address") 
const productTypeRoutes = require("./routes/productType")
const FarmerProduct = require("./models/farmer-product")
const farmerProductRoutes= require("./routes/farmerProduct")
const farmerRoutes= require("./routes/farmer")
const Coldroom = require('./models/coldroom')
const Address = require('./models/address') 
const Product = require("./models/product")
const Farmer = require('./models/farmer');
const ProductType= require("./models/product-type")
const coldroomProductRoutes= require("./routes/coldroomProduct")
const ColdroomProduct = require("./models/coldroom-product")
const Rent = require("./models/rent") 
const rentRoutes= require("./routes/rent");
//not tasted
const wholesalerRoutes = require("./routes/wholesaler")



dotenv.config({path: './config/config.env'})
const sequelize= require('./config/db');

const app = express();
app.use(express.json())




//ROUTE REGISTRATION
app.use("/api/products", productRoutes)  
app.use("/api/coldrooms", coldroomRoutes)
app.use("/api/addresses", addressRoutes)
app.use("/api/farmers", farmerRoutes)
app.use("/api/product-types", productTypeRoutes)
app.use("/api/farmer-products",farmerProductRoutes)
app.use("/api/coldroom-products", coldroomProductRoutes)
app.use("/api/rents", rentRoutes)
app.use("/api/wholesalers", wholesalerRoutes)
//
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
//
Farmer.belongsTo(Address,{
  foreignKey: {
    field: 'addressId',
    allowNull: false
  },
  onDelete: 'cascade'
}) 
Address.hasMany(Farmer)

ProductType.belongsTo(Product,{
  foreignKey: {
    field: 'productId',
    allowNull: false
  }, 
  onDelete: 'cascade'
})
Product.hasMany(ProductType)
//
ProductType.belongsToMany(Farmer, {through: FarmerProduct})
Farmer.belongsToMany(ProductType, {through: FarmerProduct});
//
Coldroom.belongsToMany(ProductType, {through: ColdroomProduct})
ProductType.belongsToMany(Coldroom, {through: ColdroomProduct})

Rent.belongsTo(Coldroom,{
  foreignKey: {
    field: 'coldroomId',
    allowNull: false
  },
  onDelete: 'cascade'
}) 


sequelize.sync({force: false})
.then(()=>{ 

  app.listen(port) 
  console.log('server starting')
})
.catch((e)=>{ 
    console.log('oh sorry server is crashed', e);
})
//
 