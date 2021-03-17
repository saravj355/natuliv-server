const { models } = require('../../db');
const { Op } = require('sequelize');
const SupplierModel = models.supplier;

function handleSuppliersFilters(filter) {
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

    if (filter.name) {
        filters.where.name = {
            [Op.like]: `%${filter.name}%`,
        };
    }

    return filters;
}

async function getSuppliers(filter = {}) {
    const filters = handleSuppliersFilters(filter);

    return SupplierModel.findAll({
        where: filters.where,
        limit: filters.limit,
    });
}

module.exports = getSuppliers;
