const Utils = require('../../utilities');
const { models } = require('../../db');
const IdentityUserModel = models.identity_user;

async function updateIdentityUser(identityUserId, identityUser = {}) {
    identityUser.lastUpdateDate = Utils.Date.getDate();
    return IdentityUserModel.update(identityUser, {
        where: { id: identityUserId },
    });
}

module.exports = updateIdentityUser;
