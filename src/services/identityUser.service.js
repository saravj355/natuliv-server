const Utils = require('../utilities');
const { models } = require('../db');
const IdentityUserModel = models.identity_user;
const { getRoleByKeyName } = require('./identityUserRole.service');

async function createIdentityUser(newIdentityUser) {
    const { fullName, email, password, roleName } = newIdentityUser;

    const identityUser = {
        fullName,
        email,
        identityUserId: Utils.UUID.generate(),
        passwordHash: Utils.Hash.generate(password),
        creationDate: Utils.Date.getDate(),
        identityUserRoleId: await getRoleByKeyName(roleName),
    };

    return IdentityUserModel.create(identityUser);
}

async function findIdentityUserByEmail(email) {
    return IdentityUserModel.findOne({
        where: { email },
    });
}

module.exports = { createIdentityUser, findIdentityUserByEmail };
