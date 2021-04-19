const { models } = require('../../db');
const IdentityUserModel = models.identity_user;

async function findUser(id) {
    return IdentityUserModel.findOne({
        where: {
            id: id,
        },
    });
}

module.exports = findUser;
