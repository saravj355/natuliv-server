const findProducts = require('./findProducts');
const findProduct = require('./findProduct');
const createProduct = require('./createProduct');
const updateProduct = require('./updateProduct');

module.exports = {
    create: createProduct,
    findOne: findProduct,
    findAll: findProducts,
    update: updateProduct,
};
