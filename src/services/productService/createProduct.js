const { models } = require('../../db');
const { uuid } = require('../../utilities');
const ProductModel = models.product;

async function createProduct(newProduct) {
    newProduct.productId = uuid();
    return ProductModel.create(newProduct);
}

module.exports = createProduct;
