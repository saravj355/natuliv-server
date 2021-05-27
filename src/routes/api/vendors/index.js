const router = require('express').Router();
const vendorService = require('../../../services/vendor.service');
const users = require('./users');

router.use('/:vendorId/users', users);

/**
 * Create a vendor
 * @param { Object } req.body
 * @return new vendor
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
 * Get list of vendors
 * @param { Object } req.query filters are supported through query parameters.
 * @return collection of vendors
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
 * Find vendor by a provided id
 * @param { Number } id: Required
 * @return vendor || {}
 */

router.get('/:id', async (req, res) => {
    try {
        const foundVendor = await vendorService.findVendorById(req.params.id);
        res.send(foundVendor);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update a specific vendor
 * @param { Number } id: Required
 * @return vendor updated || {}
 */

router.put('/:id', async (req, res) => {
    try {
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
