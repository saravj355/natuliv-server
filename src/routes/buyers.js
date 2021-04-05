const router = require('express').Router();
const buyerService = require('../services/buyerService');

/**
 * Get an buyer
 * BuyerId: int
 * @return Buyer || {}
 */
router.get('/:id', async (req, res) => {
    try {
        const foundBuyer = await buyerService.getBuyer(req.params.id);

        if (!foundBuyer) {
            throw new Error('Buyer not found');
        }

        res.send(foundBuyer);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get all Buyers
 * req : filter: {}
 * @return Buyers || {}
 */
router.post('/search', async (req, res) => {
    try {
        const Buyers = await buyerService.getBuyers(req.body);

        res.send(Buyers);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Create buyer
 * buyer: object
 * @return Buyer
 */
router.post('/create', async (req, res) => {
    try {
        const buyer = await buyerService.createBuyer(req.body);

        res.send(buyer);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update buyer
 * BuyerId: int
 * @return Buyer || {}
 */
router.put('/update/:id', async (req, res) => {
    try {
        const foundBuyer = await buyerService.getBuyer(req.params.id);

        if (!foundBuyer) {
            throw new Error('Buyer not found');
        }

        await buyerService.updateBuyer(req.params.id, req.body);

        res.send('Buyer has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
