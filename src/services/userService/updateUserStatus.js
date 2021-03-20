const { models } = require('../../db');
const UserModel = models.user;

async function updateProductStatus(user) {
    return UserModel.update(
        { isActive: !user.isActive },
        {
            where: { userId: user.userId },
        }
    );
}

module.exports = updateProductStatus;
