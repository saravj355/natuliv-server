const { models } = require('../../db');
const ProductModel = models.product;

async function updateProduct(productId, newProduct) {
    return ProductModel.update(newProduct, {
        where: { productId: productId },
    });
}

module.exports = updateProduct;
