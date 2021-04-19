const { models } = require('../../db');
const { Op } = require('sequelize');
const Utils = require('../../utilities');
const VendorModel = models.vendor;

function handleVendorsFilters(filter) {
    const filters = Utils.handleFilters(filter);

    if (filter.name) {
        filters.where.name = { [Op.like]: `%${filter.name}%` };
    }

    return filters;
}

async function findVendors(filter = {}) {
    const filters = handleVendorsFilters(filter);
    return VendorModel.findAll({
        where: filters.where,
        offset: filters.offset,
        limit: filters.limit,
        order: [filters.sort],
    });
}

module.exports = findVendors;
