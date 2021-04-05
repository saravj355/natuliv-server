const { models } = require('../../db');
const ProductModel = models.product;

async function getProduct(productId) {
    return ProductModel.findOne({
        include: [
            {
                model: models.vendor,
                as: 'vendor',
            },
            {
                model: models.product_category,
                as: 'productCategory',
            },
        ],
        where: {
            productId: productId,
        },
    });
}

module.exports = getProduct;
