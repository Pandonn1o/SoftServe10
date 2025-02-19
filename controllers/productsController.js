const Product = require('../models/productModel');

exports.checkProductId = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid products id',
    });
  }
  next();
};

exports.checkProduct = (req, res, next) => {
  const { title } = req.body;
  if (!title || title.trim() === '') {
    return res.status(400).json({
      status: 'fail',
      message: 'Title is required',
    });
  }
  next();
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const { title, price, description } = req.body;
  const product = await Product.create({ title, price, description });
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, description } = req.body;
  await Product.update({ title, price, description }, { where: { id } });
  const updatedProduct = await Product.findByPk(id);
  res.status(200).json(updatedProduct);
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.status(204).send();
};