const router = require('express').Router();
const products = require('./products');
const vendors = require('./vendors');
const buyers = require('./buyers');

//routes
router.use('/products', products);
router.use('/vendors', vendors);
router.use('/buyers', buyers);

module.exports = router;
