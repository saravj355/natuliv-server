const { models } = require('../../db');
const VendorModel = models.vendor;

async function updateVendor(id, vendor) {
    return VendorModel.update(vendor, {
        where: { id: id },
    });
}

module.exports = updateVendor;
