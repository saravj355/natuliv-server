const { models } = require('../../db');
const ProductModel = models.product;

async function updateProductStatus(product) {
    return ProductModel.update(
        { isActive: !product.isActive },
        {
            where: { productId: product.productId },
        }
    );
}

module.exports = updateProductStatus;
