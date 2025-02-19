const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/__mocks__/db.js');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

module.exports = Product;
///123123123213123123