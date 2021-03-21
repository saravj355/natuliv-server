const Utils = require('../../utilities');
const { models } = require('../../db');
const UserModel = models.user;

async function createUser(newUser) {
    newUser.userId = Utils.UUID.generate();
    newUser.creationDate = Utils.Date.getDate();
    newUser.passwordHash = Utils.Hash.generate(newUser.password);
    newUser.userRoleId = 3;
    return UserModel.create(newUser);
}

module.exports = createUser;
