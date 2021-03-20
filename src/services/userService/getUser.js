const { models } = require('../../db');
const UserModel = models.user;

async function getUser(userId) {
    return UserModel.findOne({
        where: {
            userId: userId,
        },
    });
}

module.exports = getUser;
