const { models } = require('../../db');
const UserModel = models.user;

async function getUser(userId) {
    return UserModel.findOne({
        where: {
            userId: userId,
        },
        attributes: {
            exclude: ['passwordHash'],
        },
    });
}

module.exports = getUser;
