const { models } = require('../../db');
const ProductModel = models.product;

async function getProduct(productId) {
    return ProductModel.findOne({
        where: {
            productId: productId,
        },
    });
}

module.exports = getProduct;
