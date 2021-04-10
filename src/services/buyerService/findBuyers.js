const { models } = require('../../db');
const BuyerModel = models.buyer_user;

function handleBuyersFilters(filter) {
    /* default filters */
    const filters = {
        where: {},
        limit: 10,
    };

    if (filter.limit) {
        filters.limit = filter.limit;
        delete filter.limit;
    }

    filters.where = filter;

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
