const { models } = require('../../db');
const BuyerModel = models.buyer_user;

async function findBuyer(id) {
    return BuyerModel.findOne({
        where: {
            id: id,
        },
        include: [
            {
                model: models.buyer_user_gender,
                as: 'gender',
            },
            {
                model: models.identity_user,
                as: 'identityUser',
                attributes: {
                    exclude: ['passwordHash'],
                },
            },
        ],
    });
}

module.exports = findBuyer;
