const { models } = require('../../db');
const BuyerModel = models.buyer_user;

async function getBuyer(buyerId) {
    return BuyerModel.findOne({
        where: {
            buyerUserId: buyerId,
        },
        attributes: {
            exclude: ['passwordHash'],
        },
    });
}

module.exports = getBuyer;
