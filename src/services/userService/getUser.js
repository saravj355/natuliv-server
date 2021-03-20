const { models } = require('../../db');
const userModel = models.user;

async function getUser(userId) {
    return userModel.findOne({
        where: {
            userId: userId,
        },
    });
}

module.exports = getUser;
