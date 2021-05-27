const { Hash } = require('../utilities');
const { IdentityUserRoleEnum } = require('../enums');
const identityUserService = require('../services/identityUser.service');

async function createAdminUser({ email, fullName }) {
    const adminUser = {
        fullName,
        email,
        password: Hash.random(),
        roleName: IdentityUserRoleEnum.ADMIN,
    };

    return identityUserService.createIdentityUser(adminUser);
}

module.exports = {
    createAdminUser,
};
