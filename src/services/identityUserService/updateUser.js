const Utils = require('../../utilities');
const { models } = require('../../db');
const IdentityUserModel = models.identity_user;

async function updateIdentityUser(id, identityUser = {}) {
    identityUser.lastUpdateDate = Utils.Date.getDate();
    return IdentityUserModel.update(identityUser, {
        where: { id: id },
    });
}

module.exports = updateIdentityUser;
