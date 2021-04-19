const { models } = require('../../db');
const BuyerUserModel = models.buyer_user;
const identityUserService = require('../identityUserService');

async function createBuyer(newBuyer) {
    const newIdentityUser = {
        email: newBuyer.email,
        password: newBuyer.password,
        identityUserRoleId: 2,
    };

    delete newBuyer.email;
    delete newBuyer.password;

    const identityUser = await identityUserService.create(newIdentityUser);

    newBuyer.identityUserId = identityUser.id;
    return BuyerUserModel.create(newBuyer);
}

module.exports = createBuyer;
