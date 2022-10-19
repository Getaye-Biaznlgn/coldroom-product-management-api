const { DataTypes } = require("sequelize");
const sequelize = require("./config/db.js");

const Product = sequelize.define("product", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
