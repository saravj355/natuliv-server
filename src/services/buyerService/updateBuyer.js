const { models } = require('../../db');
const BuyerModel = models.buyer_user;

async function updateBuyer(buyerUserId, buyer) {
    return BuyerModel.update(buyer, {
        where: { buyerUserId: buyerUserId },
    });
}

module.exports = updateBuyer;
