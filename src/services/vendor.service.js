const { models } = require('../db');
const { Op } = require('sequelize');
const VendorModel = models.vendor;
const VendorUserModel = models.vendor_user;
const { Hash } = require('../utilities');
const identityUserService = require('./identityUser.service');
const { IdentityUserRoleEnum } = require('../enums');
const { Filters, UUID } = require('../utilities');

/**
 * Get a list of vendors
 * @param { Object } filter: Query filters - Optional
 * @returns a collection of vendors || {}
 */

async function getVendors(filter = {}) {
    const filters = Filters.handleDefaultFilters(filter);

    if (filter.name) {
        filters.where.name = { [Op.like]: `%${filter.name}%` };
    }

    return VendorModel.findAll({
        where: filters.where,
        offset: filters.offset,
        order: [filters.sort],
        limit: filters.limit,
    });
}

/**
 * FInd a vendor by a provided id
 * @param { Number } id: Required
 * @returns found vendor
 */

async function findVendorById(id) {
    return VendorModel.findOne({
        where: { id },
    });
}

/**
 * Create a vendor
 * @param { Object } newVendor: Required
 * @returns created vendor
 */

async function createVendor(newVendor) {
    newVendor.vendorId = UUID.generate();
    newVendor.isActive = 1;
    return VendorModel.create(newVendor);
}

/**
 * Update a vendor by a provided id
 * @param { Number } id: Required
 * @param { Object } vendor: Required
 * @returns the updated vendor
 */

async function updateVendor(id, vendor) {
    const foundVendor = findVendorById(id);

    if (!foundVendor) {
        throw new Error('Product not found');
    }

    await VendorModel.update(vendor, {
        where: { id },
    });

    return findVendorById(id);
}

/**
 * Get list of vendors users by a provided vendorId
 * @param { Number } vendorId: Required
 * @param { Object } filter: Query filters - Optional
 * @returns a collection of vendor users || {}
 */

async function getVendorUsersByVendorId(vendorId, filter = {}) {
    const filters = identityUserService.handleIdentityUserFilters(filter);

    return VendorUserModel.findAll({
        where: { vendorId },
        offset: filters.offset,
        order: [filters.sort],
        attributes: { exclude: ['identityUserId'] },
        limit: filters.limit,
        include: {
            model: models.identity_user,
            as: 'identityUser',
            attributes: { exclude: ['passwordHash', 'identityUserRoleId'] },
            where: filters.where,
            include: {
                model: models.identity_user_role,
                as: 'identityUserRole',
            },
        },
    });
}

/**
 * Find a vendor user by a provided id
 * @param { Number } id: Required
 * @returns found vendor user
 */

async function findVendorUserById(id) {
    return VendorUserModel.findOne({
        where: { id },
        include: {
            model: models.identity_user,
            as: 'identityUser',
            attributes: { exclude: ['passwordHash'] },
            include: {
                model: models.identity_user_role,
                as: 'identityUserRole',
            },
        },
    });
}

/**
 * Create a vendor user
 * @param { Number } vendorId: Required
 * @param { Object } newVendorUser: Required
 * @returns created vendor
 */

async function createVendorUser(vendorId, newVendorUser) {
    const identityUser = await identityUserService.createIdentityUser({
        fullName: newVendorUser.fullName,
        email: newVendorUser.email,
        password: Hash.random(),
        roleName: IdentityUserRoleEnum.VENDOR,
    });

    const vendorUser = {
        vendorId,
        identityUserId: identityUser.id,
    };

    return VendorUserModel.create(vendorUser);
}

/**
 * Update a vendor user by a provided id
 * @param { Number } id: Required
 * @param { Object } vendorUser: Object - Required
 */

async function updateVendorUser(id, vendorUser) {
    const foundVendorUser = await findVendorUserById(id);

    if (!foundVendorUser) {
        throw new Error('vendor user not found');
    }

    await identityUserService.updateIdentityUser(
        foundVendorUser.identityUserId,
        vendorUser
    );

    return findVendorUserById(id);
}

module.exports = {
    createVendor,
    updateVendor,
    findVendorById,
    getVendors,
    createVendorUser,
    updateVendorUser,
    findVendorUserById,
    getVendorUsersByVendorId,
};
