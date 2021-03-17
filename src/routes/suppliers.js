const router = require('express').Router();
const supplierService = require('../services/supplierService');

/**
  Get supplier
 * supplierId: int
 *@return supplier || {}
 */

router.get('/get-supplier/:id', async (req, res) => {
    try {
        const supplier = await supplierService.getSupplier(req.params.id);

        if (!supplier) {
            throw new Error('Supplier doesn\'t exists');
        }

        res.send(supplier);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
  Get suppliers
 * supplierId: int
  * req: filter {} : name, isActive, limit 
 *@return suppliers || {}
 */

router.post('/get-suppliers', async (req, res) => {
    try {
        const suppliers = await supplierService.getSuppliers(req.body);

        res.send(suppliers);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
  create supplier
 * supplier: object
 * @return supplier 
 */

router.post('/create-supplier', async (req, res) => {
    try {
        const supplier = await supplierService.createSupplier(req.body);

        res.send(supplier);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});
module.exports = router;
