const { models } = require('../../db');
const supplierService = models.supplier;

async function updateSupplier(id, newSupplier) {
    return supplierService.update(newSupplier, {
        where: { supplierId: id },
    });
}

module.exports = updateSupplier;
