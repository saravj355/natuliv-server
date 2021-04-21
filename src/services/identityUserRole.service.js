const { models } = require('../db');
const IdentityUserRoleModel = models.identity_user_role;
const { IdentityUserRoleEnum } = require('../enums');

async function getRoleByKeyName(roleName) {
    const keyName = IdentityUserRoleEnum[roleName];

    return IdentityUserRoleModel.findOne({
        where: { keyName },
    });
}

module.exports = { getRoleByKeyName };
