const { models } = require('../../db');
const { Op } = require('sequelize');
const VendorUserModel = models.vendor_user;

function handleVendorsFilters(filter) {
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

    if (filter.name) {
        filters.where.name = {
            [Op.like]: `%${filter.name}%`,
        };
    }

    return filters;
}

async function findVendors(filter = {}) {
    const filters = handleVendorsFilters(filter);

    return VendorUserModel.findAll({
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
                model: models.vendor,
                as: 'vendor',
            },
        ],
    });
}

module.exports = findVendors;
