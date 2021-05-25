const router = require('express').Router();

const vendors = require('./vendors');
const products = require('./products');
const buyers = require('./buyers');

//routes
router.use('/vendors', vendors);
router.use('/products', products);
router.use('/buyers', buyers);

module.exports = router;
