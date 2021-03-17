const { models } = require('../../db');
const ProductModel = models.product;

async function updateProduct(id, newProduct) {
    return ProductModel.update(newProduct, {
        where: { productId: id },
    });
}

module.exports = updateProduct;
