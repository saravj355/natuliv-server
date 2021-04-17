const { models } = require('../../db');
const Utils = require('../../utilities');
const ProductCategoryModel = models.product_category;

function handleCategoriesFilters(filter) {
    return Utils.handleFilters(filter);
}

async function findProductCategories(filter = {}) {
    const filters = handleCategoriesFilters(filter);

    return ProductCategoryModel.findAll({
        where: filters.where,
        offset: filters.offset,
        limit: filters.limit,
        order: [filters.sort],
    });
}

module.exports = findProductCategories;
