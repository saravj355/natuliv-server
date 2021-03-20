const { models } = require('../../db');
const UserModel = models.user;

async function updateUser(userId, newUser) {
    return UserModel.update(newUser, {
        where: { userId: userId },
    });
}

module.exports = updateUser;
