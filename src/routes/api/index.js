const router = require('express').Router();
const products = require('./products');
const vendors = require('./vendors');
const buyers = require('./buyers');
const users = require('./users');

//routes
router.use('/products', products);
router.use('/vendors', vendors);
router.use('/buyers', buyers);
router.use('/users', users);

module.exports = router;
