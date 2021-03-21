const Utils = require('../../utilities');
const { models } = require('../../db');
const SupplierModel = models.supplier;

async function createSupplier(newSupplier) {
    newSupplier.supplierId = Utils.UUID.generate();
    newSupplier.creationDate = Utils.Date.getDate();
    return SupplierModel.create(newSupplier);
}

module.exports = createSupplier;
