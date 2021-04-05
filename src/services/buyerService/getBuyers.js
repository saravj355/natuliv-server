const { models } = require('../../db');
const { Op } = require('sequelize');
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

    if (filter.isActive === undefined) {
        filters.where.isActive = true;
    }

    if (filter.name) {
        filters.where.name = {
            [Op.like]: `%${filter.name}%`,
        };
    }

    return filters;
}

async function getBuyers(filter = {}) {
    const filters = handleBuyersFilters(filter);

    return BuyerModel.findAll({
        where: filters.where,
        limit: filters.limit,
        attributes: {
            exclude: ['passwordHash'],
        },
    });
}

module.exports = getBuyers;
