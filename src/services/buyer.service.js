const { models } = require('../db');
const BuyerUserModel = models.buyer_user;
const { Op } = require('sequelize');
const { IdentityUserRoleEnum } = require('../enums');
const identityUserService = require('./identityUser.service');

/**
 * Get list of buyers users
 * @param { Object } filter: Query filters - Optional
 * @returns a collection of buyers users || []
 */

async function getBuyers(filter = {}) {
    const filters = identityUserService.handleIdentityUserFilters(filter);

    const buyerUserFilters = {
        where: {},
    };

    if (filter.genderId) {
        buyerUserFilters.where.genderId = filter.genderId;
    }

    if (filter.city) {
        buyerUserFilters.where.city = { [Op.like]: `%${filter.city}%` };
    }

    return BuyerUserModel.findAll({
        where: buyerUserFilters.where,
        offset: filters.offset,
        order: [filters.sort],
        limit: filters.limit,
        include: [
            {
                model: models.buyer_user_gender,
                as: 'gender',
            },
            {
                model: models.identity_user,
                as: 'identityUser',
                attributes: { exclude: ['passwordHash'] },
                where: filters.where,
            },
        ],
    });
}

/**
 * Find a buyer user by a provided id
 * @param { Number } id: Required
 * @returns found buyer user
 */

async function findBuyerById(id) {
    return BuyerUserModel.findOne({
        where: { id },
        include: [
            {
                model: models.buyer_user_gender,
                as: 'gender',
            },
            {
                model: models.identity_user,
                as: 'identityUser',
                attributes: { exclude: ['passwordHash'] },
            },
        ],
    });
}

/**
 * Create a buyer user
 * @param { Object } newBuyer: Required
 * @returns created buyer user
 */

async function createBuyer(newBuyer) {
    const identityUser = await identityUserService.createIdentityUser({
        email: newBuyer.email,
        password: newBuyer.password,
        fullName: newBuyer.fullName,
        roleName: IdentityUserRoleEnum.BUYER,
    });

    const buyerUser = {
        bornDate: newBuyer.bornDate,
        city: newBuyer.city,
        identityUserId: identityUser.id,
        genderId: newBuyer.genderId,
    };

    return BuyerUserModel.create(buyerUser);
}

/**
 * Update a buyer user by a provided id
 * @param { Number } id: Required
 * @param { Object } buyerUser: Required
 * @returns the updated buyer user
 */

async function updateBuyer(id, buyerUser) {
    const foundBuyerUser = await findBuyerById(id);

    if (!foundBuyerUser) {
        throw new Error('Buyer user not found.');
    }

    await BuyerUserModel.update(buyerUser, {
        where: { id },
    });

    await identityUserService.updateIdentityUser(
        foundBuyerUser.identityUserId,
        buyerUser.identityUser
    );

    return findBuyerById(id);
}

module.exports = {
    createBuyer,
    findBuyerById,
    getBuyers,
    updateBuyer,
};
