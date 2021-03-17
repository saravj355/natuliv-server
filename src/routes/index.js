const router = require('express').Router();

const products = require('./products');
const suppliers = require('./suppliers');

//routes
router.use('/products', products);
router.use('/suppliers', suppliers);

module.exports = router;
