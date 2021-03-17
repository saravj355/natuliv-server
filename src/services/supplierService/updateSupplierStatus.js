const { models } = require('../../db');
const SupplierModel = models.supplier;

async function updateSupplierStatus(supplier) {
    return SupplierModel.update(
        { isActive: !supplier.isActive },
        {
            where: { supplierId: supplier.supplierId },
        }
    );
}

module.exports = updateSupplierStatus;
