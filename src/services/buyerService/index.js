const createBuyer = require('./createBuyer');
const findBuyer = require('./findBuyer');
const findBuyers = require('./findBuyers');
const updateBuyer = require('./updateBuyer');

module.exports = {
    create: createBuyer,
    findOne: findBuyer,
    findAll: findBuyers,
    update: updateBuyer,
};
