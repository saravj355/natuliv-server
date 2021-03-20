const { uuid, date, passwordHash } = require('../../utilities');
const { models } = require('../../db');
const UserModel = models.user;

async function createUser(newUser) {
    newUser.userId = uuid();
    newUser.creationDate = date();
    newUser.passwordHash = passwordHash(newUser.password);
    newUser.userRoleId = 3;
    return UserModel.create(newUser);
}

module.exports = createUser;
