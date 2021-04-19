const { models } = require('../../db');
const Utils = require('../../utilities');
const VendorUserModel = models.vendor_user;

function handleVendorUserFilters(filter) {
    const filters = Utils.handleFilters(filter);

    if (filter.fullName) {
        filters.where = filter.fullName;
    }

    return filters;
}

async function findVendorUser(filter = {}) {
    const filters = handleVendorUserFilters(filter);

    return VendorUserModel.findAll({
        where: filters.where,
        offset: filters.offset,
        limit: filters.limit,
        order: [filters.sort],
    });
}

module.exports = findVendorUser;
