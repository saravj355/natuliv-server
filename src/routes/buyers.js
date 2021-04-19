const router = require('express').Router();
const buyerService = require('../services/buyerService');

/**
 * Get buyers
 * req : filter: {}
 * @return Buyers || {}
 */
router.get('/', async (req, res) => {
    try {
        const foundBuyers = await buyerService.findAll(req.query);

        res.send(foundBuyers);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update buyer
 * id: int
 * @return Buyer || {}
 */
router.put('/update/:id', async (req, res) => {
    try {
        const foundBuyer = await buyerService.findOne(req.params.id);

        if (!foundBuyer) {
            throw new Error('Buyer not found');
        }

        await buyerService.update(req.params.id, req.body);

        res.send('Buyer has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
