const Utils = require('../../utilities');
const { models } = require('../../db');
const IdentityUserModel = models.identity_user;

async function createIdentityUser(newIdentityUser) {
    newIdentityUser.identityUserId = Utils.UUID.generate();
    newIdentityUser.passwordHash = Utils.Hash.generate(
        newIdentityUser.password
    );
    newIdentityUser.creationDate = Utils.Date.getDate();
    return IdentityUserModel.create(newIdentityUser);
}

module.exports = createIdentityUser;
