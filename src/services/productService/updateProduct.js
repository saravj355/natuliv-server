const { models } = require('../../db');
const ProductModel = models.product;

async function updateProduct(productId, product) {
    return ProductModel.update(product, {
        where: { productId: productId },
    });
}

module.exports = updateProduct;
