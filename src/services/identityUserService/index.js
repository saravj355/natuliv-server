const createUser = require('./createUser');
const updateUser = require('./updateUser');
const findUser = require('./findUser');
const findUsers = require('./findUsers');

module.exports = {
    create: createUser,
    update: updateUser,
    findOne: findUser,
    findAll: findUsers,
};
