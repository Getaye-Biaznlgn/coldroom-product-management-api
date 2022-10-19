const { DataTypes } = require("sequelize");
const sequelize = require("./config/db.js");

const FarmerRent = sequelize.define("farmer_rent", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  rentPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  state: DataTypes.STRING,
  quanity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalAmount: DataTypes.INTEGER,
});

module.exports = FarmerRent;
