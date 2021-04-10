const { models } = require('../../db');
const Utils = require('../../utilities');
const vendorUserModel = models.vendor_user;
const vendorModel = models.vendor;
const IdentityUserService = require('../identityUserService');

async function createVendorUser({ vendor, identityUser }) {
    let vendorUser = {};

    const newIdentityUser = await IdentityUserService.createIdentityUser(
        identityUser
    );

    const newVendor = await createVendor(vendor);

    vendorUser.vendorId = newVendor.id;
    vendorUser.identityUserId = newIdentityUser.id;

    return vendorUserModel.create(vendorUser);
}

async function createVendor(vendor) {
    vendor.vendorId = Utils.UUID.generate();
    return vendorModel.create(vendor);
}

module.exports = createVendorUser;
