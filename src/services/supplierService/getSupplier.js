const { models } = require('../../db');
const SupplierModel = models.supplier;

async function getSupplier(supplierId) {
    return SupplierModel.findOne({
        where: {
            supplierId: supplierId,
        },
    });
}

module.exports = getSupplier;
