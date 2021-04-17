const { models } = require('../../db');
const Utils = require('../../utilities');
const VendorModel = models.vendor;

function handleVendorsFilters(filter) {
    return Utils.handleFilters(filter);
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
