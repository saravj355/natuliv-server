const { models } = require('../../db');
const ProductModel = models.product;

async function disableProduct(product) {
    return ProductModel.update(
        { isActive: !product.isActive },
        {
            where: { productId: product.productId },
        }
    );
}

module.exports = disableProduct;
