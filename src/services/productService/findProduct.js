const { models } = require('../../db');
const ProductModel = models.product;

async function findProduct(productId) {
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
            id: productId,
        },
    });
}

module.exports = findProduct;
