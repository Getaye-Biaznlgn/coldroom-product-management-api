const { DataTypes } = require("sequelize");
const sequelize = require("./config/db.js");

const Farmer = sequelize.define("farmer", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  fname: { type: DataTypes.STRING, allowNull: false },
  lname:  {type:DataTypes.STRING, allowNull:false},
  phoneNO: {type:DataTypes.STRING, allowNull:false},
  sex: DataTypes.STRING,
});

module.exports = Farmer;
