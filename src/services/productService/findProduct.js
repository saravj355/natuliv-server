const { models } = require('../../db');
const ProductModel = models.product;

async function findProduct(id) {
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
            id: id,
        },
    });
}

module.exports = findProduct;
