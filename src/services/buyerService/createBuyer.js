const { models } = require('../../db');
const BuyerUserModel = models.buyer_user;
const identityUserService = require('../identityUserService');

async function createBuyer({ buyerUser, identityUser }) {
    const newIdentityUser = await identityUserService.createIdentityUser(
        identityUser
    );
    buyerUser.identityUserId = newIdentityUser.id;
    return BuyerUserModel.create(buyerUser);
}

module.exports = createBuyer;
