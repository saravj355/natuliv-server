const createVendorUser = require('./createVendorUser');
const findVendorUser = require('./findVendorUser');
const findVendorUsers = require('./findVendorUsers');

module.exports = {
    create: createVendorUser,
    findOne: findVendorUser,
    findAll: findVendorUsers,
};
