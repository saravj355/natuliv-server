const router = require('express').Router();
const vendorService = require('../../services/vendor.service');

/**
 * Get vendors
 * req: filter: {}
 * @return Vendors || {}
 */
router.get('/', async (req, res) => {
    try {
        const foundVendors = await vendorService.getVendors(req.query);

        res.send(foundVendors);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get vendor
 * vendorId: int
 * @return Vendor
 */
router.get('/:id', async (req, res) => {
    try {
        const foundVendor = await vendorService.findVendorById(req.params.id);

        if (!foundVendor) {
            throw new Error('Vendor not found');
        }

        res.send(foundVendor);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Create vendor
 * vendor: object
 * @return Vendor
 */
router.post('/', async (req, res) => {
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
router.put('/:id', async (req, res) => {
    try {
        const foundVendor = await vendorService.findVendorById(req.params.id);

        if (!foundVendor) {
            throw new Error('Vendor not found');
        }

        const updatedVendor = await vendorService.updateVendor(
            req.params.id,
            req.body
        );

        res.send(updatedVendor);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
