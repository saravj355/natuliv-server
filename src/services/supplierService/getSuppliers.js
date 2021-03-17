const { models } = require('../../db');
const supplierService = models.supplier;

function handleSupplierFilters(filter) {
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

    return filters;
}

async function getSuppliers(filter) {
    const filters = handleSupplierFilters(filter);

    return supplierService.findAll({
        where: filters.where,
        limit: filters.limit,
    });
}

module.exports = getSuppliers;
