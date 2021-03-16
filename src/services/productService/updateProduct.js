const { models } = require('../../db');
const ProductModel = models.product;

async function updateProduct(id, product) {
    return ProductModel.update(product, {
        where: { productId: id },
    });
}

module.exports = updateProduct;
