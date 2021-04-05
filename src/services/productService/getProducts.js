const { models } = require('../../db');
const { Op } = require('sequelize');
const ProductModel = models.product;

function handleProductsFilters(filter) {
    /* default filters */
    const filters = {
        where: {},
        limit: 10,
    };

    if (filter.limit) {
        filters.limit = filter.limit;
        delete filter.limit;
    }

    filters.where = filter;

    if (filter.isActive === undefined) {
        filters.where.isActive = true;
    }

    if (filter.price) {
        filters.where.price = {
            [Op.lt]: filter.price.lowerThan || Number.MAX_VALUE,
            [Op.gt]: filter.price.greaterThan || -1,
        };
    }

    if (filter.name) {
        filters.where.name = {
            [Op.like]: `%${filter.name}%`,
        };
    }

    return filters;
}

async function getProducts(filter = {}) {
    const filters = handleProductsFilters(filter);

    return ProductModel.findAll({
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
        where: filters.where,
        limit: filters.limit,
    });
}

module.exports = getProducts;
