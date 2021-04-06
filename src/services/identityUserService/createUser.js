const Utils = require('../../utilities');
const { models } = require('../../db');
const identityUserModel = models.identity_user;

async function createIdentityUser(newIdentityUser) {
    newIdentityUser.identityUserId = Utils.UUID.generate();
    newIdentityUser.passwordHash = Utils.Hash.generate(
        newIdentityUser.password
    );
    newIdentityUser.creationDate = Utils.Date.getDate();
    newIdentityUser.lastLoginDate = Utils.Date.getDate();
    return identityUserModel.create(newIdentityUser);
}

module.exports = createIdentityUser;
