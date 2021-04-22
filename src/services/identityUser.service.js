const Utils = require('../utilities');
const { models } = require('../db');
const IdentityUserModel = models.identity_user;
const { getRoleByKeyName } = require('./identityUserRole.service');

async function findIdentityUserById(id) {
    return IdentityUserModel.findOne({
        where: { id },
    });
}

async function createIdentityUser(newIdentityUser) {
    const { fullName, email, password, roleName } = newIdentityUser;

    const identityUser = {
        fullName,
        email,
        identityUserId: Utils.UUID.generate(),
        passwordHash: Utils.Hash.generate(password),
        creationDate: Utils.Date.getDate(),
    };

    const { id } = await getRoleByKeyName(roleName);
    identityUser.identityUserRoleId = id;

    return IdentityUserModel.create(identityUser);
}

async function updateIdentityUser(id, identityUser = {}) {
    if (identityUser.password) {
        identityUser.passwordHash = Utils.Hash.generate(identityUser.password);
    }

    identityUser.lastUpdateDate = Utils.Date.getDate();

    await IdentityUserModel.update(identityUser, {
        where: { id },
    });
    return await findIdentityUserById(id);
}

async function findIdentityUserByEmail(email) {
    return IdentityUserModel.findOne({
        where: { email },
    });
}

module.exports = {
    createIdentityUser,
    findIdentityUserByEmail,
    updateIdentityUser,
};
