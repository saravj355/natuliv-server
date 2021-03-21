const { models } = require('../../db');
const SupplierModel = models.supplier;

async function updateSupplier(supplierId, supplier) {
    return SupplierModel.update(supplier, {
        where: { supplierId: supplierId },
    });
}

module.exports = updateSupplier;
