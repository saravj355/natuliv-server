const router = require('express').Router();

const products = require('./products');
const suppliers = require('./suppliers');
const users = require('./users');

//routes
router.use('/products', products);
router.use('/suppliers', suppliers);
router.use('/users', users);

module.exports = router;
