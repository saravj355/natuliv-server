const { models } = require('../db');
const IdentityUserModel = models.identity_user;
const Utils = require('../utilities');
const { Op } = require('sequelize');
const { Filters } = require('../utilities');
const IdentityUserRoleModel = models.identity_user_role;

/**
 * handle filters of identity User
 * @param { Object } filter: Query filters - Optional
 * @returns filters || {}
 */

function handleIdentityUserFilters(filter = {}) {
    const filters = Filters.handleDefaultFilters(filter);

    if (filter.fullName) {
        filters.where.fullName = { [Op.like]: `%${filter.fullName}%` };
    }

    if (filter.email) {
        filters.where.email = { [Op.like]: `%${filter.email}%` };
    }
    return filters;
}

/**
 * Get identity user role by a provided key name
 * @param { String } keyName: Required
 * @returns the identity user role
 */

async function getRoleByKeyName(keyName) {
    return IdentityUserRoleModel.findOne({
        where: { keyName },
    });
}

/**
 * Find an identity user by a provided id
 * @param { Number } id: Required
 * @returns found identity user
 */

async function findIdentityUserById(id) {
    return IdentityUserModel.findOne({
        where: { id },
        include: [
            {
                model: models.identity_user_role,
                as: 'identityUserRole',
            },
        ],
    });
}

/**
 * Create an identity user
 * @param { Object } newIdentityUser: Required
 * @returns created identity user
 */

async function createIdentityUser(newIdentityUser) {
    const { fullName, email, password, roleName } = newIdentityUser;

    const identityUser = {
        fullName,
        email,
        identityUserId: Utils.UUID.generate(),
        passwordHash: Utils.Hash.generate(password),
        creationDate: Utils.Date.getDate(),
    };

    const identityUserRole = await getRoleByKeyName(roleName);
    identityUser.identityUserRoleId = identityUserRole.id;

    return IdentityUserModel.create(identityUser);
}

/**
 * Update an identity user by a provided id
 * @param { Number } id: Required
 * @param { Object } identityUser: Required
 * @returns the updated identity user
 */

async function updateIdentityUser(id, identityUser = {}) {
    if (identityUser.password) {
        identityUser.passwordHash = Utils.Hash.generate(identityUser.password);
    }

    identityUser.lastUpdateDate = Utils.Date.getDate();

    return IdentityUserModel.update(identityUser, {
        where: { id },
    });
}

module.exports = {
    createIdentityUser,
    updateIdentityUser,
    handleIdentityUserFilters,
    findIdentityUserById,
};
