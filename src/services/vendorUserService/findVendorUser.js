const { models } = require('../../db');
const VendorUserModel = models.vendor_user;

async function findVendorUser(id) {
    return VendorUserModel.findOne({
        where: {
            id: id,
        },
        include: [
            {
                model: models.vendor,
                as: 'vendor',
            },
            {
                model: models.identity_user,
                as: 'identityUser',
            },
        ],
    });
}

module.exports = findVendorUser;
