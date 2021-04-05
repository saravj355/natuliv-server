const { models } = require('../../db');
const VendorModel = models.vendor;

async function updateVendor(vendorId, vendor) {
    return VendorModel.update(vendor, {
        where: { vendorId: vendorId },
    });
}

module.exports = updateVendor;
