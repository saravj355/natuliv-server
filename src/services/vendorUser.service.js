const { models } = require('../db');
const VendorUserModel = models.vendor_user;
const identityUserService = require('./identityUser.service');
const { IdentityUserRoleEnum } = require('../enums');

async function createVendorUser(vendorId, newVendorUser) {
    const identityUser = await identityUserService.createIdentityUser({
        fullName: newVendorUser.fullName,
        email: newVendorUser.email,
        password: newVendorUser.password,
        roleName: IdentityUserRoleEnum.VENDOR,
    });

    const vendorUser = {
        vendorId,
        identityUserId: identityUser.id,
    };

    return VendorUserModel.create(vendorUser);
}

module.exports = { createVendorUser };
