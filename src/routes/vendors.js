const router = require('express').Router();
const vendorService = require('../services/vendorService');

/**
 * Get vendor
 * vendorId: int
 * @return Vendor
 */
router.get('/:id', async (req, res) => {
    try {
        const foundVendor = await vendorService.getVendor(req.params.id);

        if (!foundVendor) {
            throw new Error('Vendor not found');
        }

        res.send(foundVendor);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get all vendors
 * req: filter: {}
 * @return Vendors || {}
 */
router.post('/search', async (req, res) => {
    try {
        const vendors = await vendorService.getVendors(req.body);

        res.send(vendors);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Create vendor
 * vendor: object
 * @return Vendor
 */
router.post('/create', async (req, res) => {
    try {
        const vendor = await vendorService.createVendor(req.body);

        res.send(vendor);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update vendor
 * vendorId: int
 * @return Vendor || {}
 */
router.put('/update/:id', async (req, res) => {
    try {
        const foundVendor = await vendorService.getVendor(req.params.id);

        if (!foundVendor) {
            throw new Error('Vendor not found');
        }

        await vendorService.updateVendor(req.params.id, req.body);

        res.send('Vendor has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
