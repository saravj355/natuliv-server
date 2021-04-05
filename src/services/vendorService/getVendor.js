const { models } = require('../../db');
const VendorModel = models.vendor;

async function getVendor(vendorId) {
    return VendorModel.findOne({
        where: {
            vendorId: vendorId,
        },
    });
}

module.exports = getVendor;
