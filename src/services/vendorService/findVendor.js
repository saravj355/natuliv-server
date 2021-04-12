const { models } = require('../../db');
const VendorModel = models.vendor;

async function findVendor(id) {
    return VendorModel.findOne({
        where: {
            id: id,
        },
    });
}

module.exports = findVendor;
