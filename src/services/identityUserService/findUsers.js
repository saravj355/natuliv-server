const { models } = require('../../db');
const Utils = require('../../utilities');
const IdentityUserModel = models.identity_user;

function handleUsersFilters(filter) {
    return Utils.handleFilters(filter);
}

async function findUsers(filter = {}) {
    const filters = handleUsersFilters(filter);

    return IdentityUserModel.findAll({
        where: filters.where,
        limit: filters.limit,
    });
}

module.exports = findUsers;
