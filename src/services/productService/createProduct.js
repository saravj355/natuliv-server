const { models } = require('../../db');
const { uuid } = require('../../utilities');

const ProductModel = models.product;

async function createProduct(product) {
    product.productId = uuid();
    return ProductModel.create(product);
}

module.exports = createProduct;
