const { models } = require('../../db');
const Utils = require('../../utilities');
const vendorModel = models.vendor;

async function createVendor(vendor) {
    vendor.vendorId = Utils.UUID.generate();
    return vendorModel.create(vendor);
}

module.exports = createVendor;
