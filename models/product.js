const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("product", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
