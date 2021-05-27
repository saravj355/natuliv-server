const router = require('express').Router();
const vendorService = require('../../../services/vendor.service');

/**
 * Create a vendor user
 * @param { Object } req.body
 * @return new vendor user
 */

router.post('/', async (req, res) => {
    try {
        const vendorId = parseInt(req.baseUrl.split('/')[3]);

        const vendorUser = await vendorService.createVendorUser(
            vendorId,
            req.body
        );

        res.send(vendorUser);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get list of vendors users by a provided vendorId
 * @param {*} req.query filters are supported through query parameters.
 * @return collection of users by vendorId || []
 */

router.get('/', async (req, res) => {
    try {
        const vendorId = parseInt(req.baseUrl.split('/')[3]);

        const foundVendorUsers = await vendorService.getVendorUsersByVendorId(
            vendorId,
            req.query
        );

        res.send(foundVendorUsers);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Find vendor user by a provided id
 * @param { Number } id: Required
 * @return vendor user || {}
 */

router.get('/:id', async (req, res) => {
    try {
        const foundVendorUser = await vendorService.findVendorUserById(
            req.params.id
        );

        res.send(foundVendorUser);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update vendor user by a provided id
 * @param { Number } id: Required
 * @return vendor user || {}
 */

router.put('/:id', async (req, res) => {
    try {
        const updatedVendorUser = await vendorService.updateVendorUser(
            req.params.id,
            req.body
        );

        res.send(updatedVendorUser);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
