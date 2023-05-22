const express = require('express');
const { setProducts, getProducts, getProductById, editProduct, deleteProduct} = require('../controllers/product.controller');
const router = express.Router(); 

router.get("/", getProducts);
router.get('/product-Id/:id', getProductById)
router.post("/", setProducts);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);


module.exports = router;