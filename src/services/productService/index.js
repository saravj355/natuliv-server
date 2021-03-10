const { models } = require('../../db');
const { Op } = require('sequelize');
const Product = models.product;

// model associations
Product.belongsTo(models.supplier);
Product.belongsTo(models.product_category);

async function getProducts(filter = {}) {
    let limit = 10,
        max,
        min;

    if (filter.limit) {
        limit = filter.limit;
        delete filter.limit;
    }

    if (filter.price) {
        max = filter.price.max;
        min = filter.price.min;
        delete filter.price;
    }

    if (filter.isActive === undefined) {
        filter.isActive = true;
    }

    console.log(filter, max, min, limit);

    return Product.findAll({
        include: [models.supplier, models.product_category],
        where: {
            price: {
                [Op.gte]: min,
                [Op.lte]: max,
            },
            [Op.and]: [filter],
        },
        limit: limit,
    });
}

module.exports = { getProducts };
