const { models } = require('../../db');
const VendorUserModel = models.vendor_user;

async function createVendorUser(newVendorUser) {
    return VendorUserModel.create(newVendorUser);
}

module.exports = createVendorUser;
