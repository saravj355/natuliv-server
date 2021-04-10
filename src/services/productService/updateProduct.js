const { models } = require('../../db');
const ProductModel = models.product;

async function updateProduct(productId, product) {
    return ProductModel.update(product, {
        where: { id: productId },
    });
}

module.exports = updateProduct;
