const { models } = require('../../db');
const ProductModel = models.product;

async function getProducts(productId) {
    return ProductModel.findOne({
        productId,
    });
}

module.exports = getProducts;
