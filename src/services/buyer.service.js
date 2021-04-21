const { models } = require('../db');
const BuyerUserModel = models.buyer_user;
const BuyerGenderModel = models.buyer_user_gender;
const identityUserService = require('./identityUser.service');
const { IdentityUserRoleEnum, BuyerGenderEnum } = require('../enums');
const { Filters } = require('../utilities');

const buyerReferenceModels = [
    { model: models.buyer_user_gender, as: 'gender' },
    {
        model: models.identity_user,
        as: 'identityUser',
        attributes: { exclude: ['passwordHash'] },
    },
];

async function getUserGenderIdByKeyName(genderName) {
    const keyName = BuyerGenderEnum[genderName];

    return BuyerGenderModel.findOne({
        where: { keyName },
    });
}

async function findBuyersByFilters(filter = {}) {
    const filters = Filters.handleDefaultFilters(filter);

    if (filter.gender) {
        filters.where.genderId = await getUserGenderIdByKeyName(filter.gender);
    }

    return filters;
}

async function getBuyers(filter = {}) {
    const filters = findBuyersByFilters(filter);

    return BuyerUserModel.findAll({
        where: filters.where,
        offset: filters.offset,
        order: filters.sort,
        limit: filters.limit,
        include: buyerReferenceModels,
    });
}

async function findBuyerById(id) {
    return BuyerUserModel.findOne({
        where: { id: id },
        include: buyerReferenceModels,
    });
}

async function createBuyer(newBuyer) {
    const identityUser = await identityUserService.createIdentityUser({
        email: newBuyer.email,
        password: newBuyer.password,
        fullName: newBuyer.fullName,
        role: IdentityUserRoleEnum.BUYER,
    });
    const buyerUser = {
        bornDate: newBuyer.bornDate,
        genderId: newBuyer.genderId,
        city: newBuyer.city,
        identityUserId: identityUser,
    };

    return BuyerUserModel.create(buyerUser);
}

async function updateBuyer(id, buyer = {}) {
    const { identityUserId } = await findBuyerById(id);

    BuyerUserModel.update(buyer, {
        where: { id: id },
    });

    await identityUserService.updateIdentityUser(identityUserId, buyer);

    return await findBuyerById(id);
}

module.exports = { createBuyer, findBuyerById, getBuyers, updateBuyer };
