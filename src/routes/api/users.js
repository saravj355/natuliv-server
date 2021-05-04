const router = require('express').Router();
const adminService = require('../../services/admin.service');
const vendorUserService = require('../../services/vendorUser.service');
const vendorService = require('../../services/vendor.service');

/**
 * Create admin
 * identityUser: object
 * @return IdentityUser
 */
router.post('/admin', async (req, res) => {
    try {
        const user = await adminService.createAdminUser(req.body);

        res.send(user);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Create vendor
 * id: int {vendorId}
 * @return Vendor
 */
router.post('/vendors', async (req, res) => {
    try {
        const foundVendor = await vendorService.findVendorById(req.params.id);

        if (!foundVendor) {
            throw new Error('Vendor user not found');
        }

        const vendorUser = await vendorUserService.createVendorUser(
            req.params.id,
            req.body
        );

        res.send(vendorUser);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
