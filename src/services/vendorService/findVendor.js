const { models } = require('../../db');
const VendorUserModel = models.vendor_user;

async function findVendor(vendorId) {
    return VendorUserModel.findOne({
        where: {
            id: vendorId,
        },
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

module.exports = findVendor;
