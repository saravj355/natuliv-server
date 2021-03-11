const { models } = require('../../db');
const utils = require('../../utilities');

const ProductModel = models.product;

async function createProduct(product) {
    product.productId = utils.uuid();
    product.isActive = 1;
    return await ProductModel.create(product);
}

module.exports = createProduct;
