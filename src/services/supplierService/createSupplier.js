const { uuid, date } = require('../../utilities');
const { models } = require('../../db');
const supplierService = models.supplier;

async function createSupplier(supplier) {
    supplier.supplierId = uuid();
    supplier.creationDate = date();
    return supplierService.create(supplier);
}

module.exports = createSupplier;
