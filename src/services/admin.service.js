const { Random } = require('../utilities');
const { IdentityUserRoleEnum } = require('../enums');
const identityUserService = require('./identityUser.service');

async function createAdminUser({ email, fullName }) {
    const adminUser = {
        fullName,
        email,
        password: Random.generate(),
        roleName: IdentityUserRoleEnum.ADMIN,
    };

    return await identityUserService.createIdentityUser(adminUser);
}

module.exports = { createAdminUser };
