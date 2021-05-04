const { models } = require('../db');
const BuyerUserModel = models.buyer_user;
const { Filters } = require('../utilities');
const { IdentityUserRoleEnum } = require('../enums');
const identityUserService = require('./identityUser.service');
const { getGenderByKeyName } = require('./buyerUserGender.service');

const buyerReferenceModels = [
    {
        model: models.buyer_user_gender,
        as: 'gender',
    },
    {
        model: models.identity_user,
        as: 'identityUser',
        attributes: { exclude: ['passwordHash'] },
    },
];

async function findBuyersByFilters(filter = {}) {
    const filters = Filters.handleDefaultFilters(filter);
    
    if (filter.gender) {
        const gender = await getGenderByKeyName(filter.gender);
        filters.where.genderId = gender.id;
    }

    return filters;
}

async function getBuyers(filter = {}) {
    const filters = await findBuyersByFilters(filter);
    return BuyerUserModel.findAll({
        where: filters.where,
        offset: filters.offset,
        order: [filters.sort],
        limit: filters.limit,
        include: buyerReferenceModels,
    });
}

async function findBuyerById(id) {
    return BuyerUserModel.findOne({
        where: { id },
        include: buyerReferenceModels,
    });
}

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
    };

    const buyerUserGender = await getGenderByKeyName(newBuyer.gender);
    buyerUser.genderId = buyerUserGender.id;

    return BuyerUserModel.create(buyerUser);
}

async function updateBuyer(id, buyer = {}) {
    const { identityUserId } = await findBuyerById(id);

    BuyerUserModel.update(buyer, {
        where: { id },
    });

    await identityUserService.updateIdentityUser(identityUserId, buyer);

    return await findBuyerById(id);
}

module.exports = { createBuyer, findBuyerById, getBuyers, updateBuyer };
