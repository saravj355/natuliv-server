const Utils = require('../../utilities');
const { models } = require('../../db');
const BuyerModel = models.buyer_user;

async function createBuyer(newBuyer) {
    newBuyer.buyerId = Utils.UUID.generate();
    newBuyer.creationDate = Utils.Date.getDate();
    newBuyer.passwordHash = Utils.Hash.generate(newBuyer.password);
    return BuyerModel.create(newBuyer);
}

module.exports = createBuyer;
