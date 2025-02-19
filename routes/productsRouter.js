const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router
  .route('/')
  .get(productsController.getAllProducts)
  .post(productsController.checkProduct, productsController.createProduct);

router
  .route('/:id')
  .get(productsController.checkProductId, productsController.getProductById)
  .put(productsController.checkProductId, productsController.checkProduct, productsController.updateProduct)
  .delete(productsController.checkProductId, productsController.deleteProduct);

module.exports = router;