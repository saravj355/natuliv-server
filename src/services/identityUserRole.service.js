const { models } = require('../db');
const IdentityUserRoleModel = models.identity_user_role;

async function getRoleByKeyName(roleName) {
    return IdentityUserRoleModel.findOne({
        where: { keyName: roleName },
    });
}

module.exports = { getRoleByKeyName };
