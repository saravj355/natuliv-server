const { models } = require('../../db');
const BuyerModel = models.buyer_user;
const findBuyer = require('./findBuyer');
const identityUserService = require('../identityUserService');

async function updateBuyer(buyerId, { buyer, identityUser }) {
    const buyerData = await findBuyer(buyerId);

    BuyerModel.update(buyer, {
        where: { id: buyerId },
    });

    await identityUserService.updateIdentityUser(
        buyerData.identityUserId,
        identityUser
    );
}

module.exports = updateBuyer;
