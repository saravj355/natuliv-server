const { models } = require('../db');
const VendorModel = models.vendor;
const { Op } = require('sequelize');
const { Filters, UUID } = require('../utilities');

function findVendorsByFilters(filter = {}) {
    const filters = Filters.handleDefaultFilters(filter);

    if (filter.name) {
        filters.where.name = { [Op.like]: `%${filter.name}%` };
    }

    return filters;
}

async function getVendors(filter = {}) {
    const filters = findVendorsByFilters(filter);

    return VendorModel.findAll({
        where: filters.where,
        offset: filters.offset,
        order: [filters.sort],
        limit: filters.limit,
    });
}

async function findVendorById(id) {
    return VendorModel.findOne({
        where: { id: id },
    });
}

async function createVendor(newVendor) {
    newVendor.vendorId = UUID.generate();
    return VendorModel.create(newVendor);
}

async function updateVendor(id, vendor) {
    await VendorModel.update(vendor, {
        where: { id: id },
    });
    return await findVendorById(id);
}

module.exports = {
    createVendor,
    updateVendor,
    findVendorById,
    getVendors,
};
