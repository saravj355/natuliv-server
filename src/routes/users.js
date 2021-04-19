const router = require('express').Router();
const buyerService = require('../services/buyerService');
const vendorUserService = require('../services/vendorUserService');

/**
 * Get buyer
 * id: int
 * @return Buyer || {}
 */
router.get('/buyer/:id', async (req, res) => {
    try {
        const foundBuyer = await buyerService.findOne(req.params.id);

        if (!foundBuyer) {
            throw new Error('Buyer not found');
        }

        res.send(foundBuyer);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get vendor user
 * vendorId: int
 * @return Vendor
 */
router.get('/vendor/:id', async (req, res) => {
    try {
        const foundVendorUser = await vendorUserService.findOne(req.params.id);

        if (!foundVendorUser) {
            throw new Error('Vendor user not found');
        }

        res.send(foundVendorUser);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
