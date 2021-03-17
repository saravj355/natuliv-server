const { models } = require('../../db');
const { Op } = require('sequelize');
const supplierService = models.supplier;

function handleSupplierFilters(filter) {
    /* default filters */
    const filters = {
        where: {
            name: {
                [Op.like]: `%${filter.name}%`,
            },
        },
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

async function getSuppliers(filter) {
    const filters = handleSupplierFilters(filter);

    return supplierService.findAll({
        where: filters.where,
        limit: filters.limit,
    });
}

module.exports = getSuppliers;
