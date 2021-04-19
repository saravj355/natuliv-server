const { models } = require('../../db');
const BuyerModel = models.buyer_user;
const findBuyer = require('./findBuyer');
const identityUserService = require('../identityUserService');

async function updateBuyer(id, buyer) {
    const buyerData = await findBuyer(id);

    const identityUser = {
        email: buyer.email,
        password: buyer.password,
    };

    delete buyer.email;
    delete buyer.password;

    BuyerModel.update(buyer, {
        where: { id: id },
    });

    await identityUserService.update(buyerData.identityUserId, identityUser);
}

module.exports = updateBuyer;
