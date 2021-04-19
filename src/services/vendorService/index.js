const findVendor = require('./findVendor');
const findVendors = require('./findVendors');
const createVendor = require('./createVendor');
const updateVendor = require('./updateVendor');

module.exports = {
    create: createVendor,
    findOne: findVendor,
    findAll: findVendors,
    update: updateVendor,
};
