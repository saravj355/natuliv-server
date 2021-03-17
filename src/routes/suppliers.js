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

/**
 * Update supplier
 * supplierId: int
 * @return Supplier || {}
 */
router.put('/update-supplier/:id', async (req, res) => {
    try {
        const foundSupplier = await supplierService.getSupplier(req.params.id);

        if (!foundSupplier) {
            throw new Error('supplier doesn\'t exists');
        }

        await supplierService.updateSupplier(req.params.id, req.body);

        res.send('Supplier has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});
module.exports = router;

/**
 * update supplier status
 * supplierId: int
 */
router.put('/update-supplier-status/:id', async (req, res) => {
    try {
        const foundSupplier = await supplierService.getSupplier(req.params.id);

        if (!foundSupplier) {
            throw new Error('The product doesn\'t exists');
        }

        await supplierService.updateSupplierStatus(foundSupplier);

        res.send('Supplier status has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});
