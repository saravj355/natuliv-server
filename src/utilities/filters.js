/**
 * handle the default filters for entities
 * @param { Object } filter: Optional
 * @returns the default filters
 */

function handleDefaultFilters(filter = {}) {
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

    if (filter.sortBy) {
        filters.sort[0] = filter.sortBy;
    }

    if (filter.sortOrder) {
        filters.sort[1] = filter.sortOrder;
    }

    return filters;
}

module.exports = { handleDefaultFilters };
