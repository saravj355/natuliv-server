const { models } = require('../../db');
const { Op } = require('sequelize');
const VendorModel = models.vendor;

function handleVendorsFilters(filter) {
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

async function getVendors(filter = {}) {
    const filters = handleVendorsFilters(filter);

    return VendorModel.findAll({
        where: filters.where,
        limit: filters.limit,
    });
}

module.exports = getVendors;
