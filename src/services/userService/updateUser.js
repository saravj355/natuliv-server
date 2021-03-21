const { models } = require('../../db');
const UserModel = models.user;

async function updateUser(userId, user) {
    return UserModel.update(user, {
        where: { userId: userId },
    });
}

module.exports = updateUser;
