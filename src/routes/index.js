const router = require('express').Router();

const users = require('./users');
const products = require('./products');

//routes
router.use('/users', users);
router.use('/products', products);

module.exports = router;
