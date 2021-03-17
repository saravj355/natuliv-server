const { uuid, date } = require('../../utilities');
const { models } = require('../../db');
const SupplierModel = models.supplier;

async function createSupplier(newSupplier) {
    newSupplier.supplierId = uuid();
    newSupplier.creationDate = date();
    return SupplierModel.create(newSupplier);
}

module.exports = createSupplier;
