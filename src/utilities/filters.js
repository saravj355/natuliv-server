function handleFilters(filter) {
    /* default filters */
    const filters = {
        where: {},
        offset: filter.offset ? parseInt(filter.offset) : 0,
        sort: ['id', 'ASC'],
        limit: filter.limit ? parseInt(filter.limit) : 9,
    };

    if (filter.sortBy) {
        filters.sort[0] = filter.sortBy;
    }

    if (filter.sortOrder) {
        filters.sort[1] = filter.sortOrder;
    }

    return filters;
}

module.exports = handleFilters;
