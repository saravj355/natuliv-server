const { Op } = require('sequelize');

function handleFilters(filter) {
    /* default filters */
    const filters = {
        where: {},
        offset: filter.offset ? parseInt(filter.offset) : 0,
        sort: ['id', 'ASC'],
        limit: filter.limit ? parseInt(filter.limit) : 9,
    };

    if (filter.isActive) {
        filters.where.isActive = JSON.parse(filter.isActive);
    }

    if (filter.name) {
        filters.where.name = { [Op.like]: `%${filter.name}%` };
    }

    if (filter.sortBy) {
        filters.sort[0] = filter.sortBy;
    }

    if (filter.sortOrder) {
        filters.sort[1] = filter.sortOrder;
    }

    return filters;
}

module.exports = handleFilters;
