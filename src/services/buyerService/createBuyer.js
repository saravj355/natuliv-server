const { models } = require('../../db');
const BuyerUserModel = models.buyer_user;
const identityUserService = require('../identityUserService');

async function createBuyer(newBuyerUser) {
    const identityUser = await identityUserService.createUser(newBuyerUser);
    newBuyerUser.identityUserId = identityUser.id;
    return BuyerUserModel.create(newBuyerUser);
}

module.exports = createBuyer;
