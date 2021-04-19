const { models } = require('../../db');
const { Op } = require('sequelize');
const Utils = require('../../utilities');
const BuyerModel = models.buyer_user;

function handleBuyersFilters(filter) {
    const filters = Utils.handleFilters(filter);

    if (filter.fullName) {
        filters.where.fullName = { [Op.like]: `%${filter.fullName}%` };
    }

    return filters;
}

async function findBuyers(filter = {}) {
    const filters = handleBuyersFilters(filter);

    return BuyerModel.findAll({
        where: filters.where,
        limit: filters.limit,
        include: [
            {
                model: models.identity_user,
                as: 'identityUser',
                attributes: {
                    exclude: ['passwordHash'],
                },
            },
            {
                model: models.buyer_user_gender,
                as: 'gender',
            },
        ],
    });
}

module.exports = findBuyers;
