const Utils = require('../../utilities');
const { models } = require('../../db');
const identityBuyerModel = models.identity_Buyer;
const vendorBuyerModel = models.identity_Buyer;

async function createVendor(newVendor) {
    newVendor.vendorId = Utils.UUID.generate();
    newVendor.passwordHash = Utils.Hash.generate(newVendor.password);
    newVendor.creationDate = Utils.Date.getDate();
    identityBuyerModel.create(newVendor);
    vendorBuyerModel.create(newVendor);
}

module.exports = createVendor;
