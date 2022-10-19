const { DataTypes } = require("sequelize");
const sequelize = require("./config/db.js");

const ProductType = sequelize.define("product_type", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.STRING,
});

module.exports = ProductType;
