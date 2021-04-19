const { models } = require('../../db');
const { Op } = require('sequelize');
const Utils = require('../../utilities');
const ProductModel = models.product;

function handleProductsFilters(filter) {
    const filters = Utils.handleFilters(filter);

    if (filter.vendorId) {
        filters.where.vendorId = filter.vendorId;
    }

    if (filter.productCategoryId) {
        filters.where.productCategoryId = filter.productCategoryId;
    }

    if (filter.name) {
        filters.where.name = { [Op.like]: `%${filter.name}%` };
    }

    return filters;
}

async function findProducts(filter = {}) {
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
        offset: filters.offset,
        limit: filters.limit,
        order: [filters.sort],
    });
}

module.exports = findProducts;
