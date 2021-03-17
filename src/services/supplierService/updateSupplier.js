const { models } = require('../../db');
const SupplierModel = models.supplier;

async function updateSupplier(supplierId, newSupplier) {
    return SupplierModel.update(newSupplier, {
        where: { supplierId: supplierId },
    });
}

module.exports = updateSupplier;
