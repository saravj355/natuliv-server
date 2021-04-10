const findVendor = require('./findVendor');
const { models } = require('../../db');
const VendorModel = models.vendor;
const identityUserService = require('../identityUserService');

async function updateVendorUser(vendorUserId, { vendor, identityUser }) {
    const vendorData = await findVendor(vendorUserId);

    await identityUserService.updateIdentityUser(
        vendorData.identityUserId,
        identityUser
    );

    await updateVendor(vendorData.vendorId, vendor);
}

async function updateVendor(vendorId, vendor) {
    return VendorModel.update(vendor, {
        where: { id: vendorId },
    });
}

module.exports = updateVendorUser;
