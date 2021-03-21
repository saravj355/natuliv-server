const { models } = require('../../db');
const Utils = require('../../utilities');
const ProductModel = models.product;

async function createProduct(newProduct) {
    newProduct.productId = Utils.UUID.generate();
    return ProductModel.create(newProduct);
}

module.exports = createProduct;
