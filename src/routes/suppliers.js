const router = require('express').Router();
const supplierService = require('../services/supplierService');

/**
 * Get a supplier
 * supplierId: int
 * @return supplier || {}
 */
router.get('/:id', async (req, res) => {
    try {
        const foundSupplier = await supplierService.getSupplier(req.params.id);

        if (!foundSupplier) {
            throw new Error('Supplier doesn\'t exists');
        }

        res.send(foundSupplier);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get all suppliers
 * supplierId: int
 * req: filter: {}
 * @return suppliers || {}
 */
router.post('/search', async (req, res) => {
    try {
        const suppliers = await supplierService.getSuppliers(req.body);

        res.send(suppliers);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Create a supplier
 * supplier: object
 * @return supplier
 */
router.post('/create', async (req, res) => {
    try {
        const supplier = await supplierService.createSupplier(req.body);

        res.send(supplier);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update a supplier
 * supplierId: int
 * @return Supplier || {}
 */
router.put('/update/:id', async (req, res) => {
    try {
        const foundSupplier = await supplierService.getSupplier(req.params.id);

        if (!foundSupplier) {
            throw new Error('Supplier doesn\'t exists');
        }

        await supplierService.updateSupplier(req.params.id, req.body);

        res.send('Supplier has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update supplier status
 * supplierId: int
 */
router.put('/update-supplier-status/:id', async (req, res) => {
    try {
        const foundSupplier = await supplierService.getSupplier(req.params.id);

        if (!foundSupplier) {
            throw new Error('Supplier doesn\'t exists');
        }

        await supplierService.updateSupplierStatus(foundSupplier);

        res.send('Supplier status has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
