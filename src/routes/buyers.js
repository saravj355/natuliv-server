const router = require('express').Router();
const buyerService = require('../services/buyerService');

/**
 * Get buyers
 * req : filter: {}
 * @return Buyers || {}
 */
router.get('/', async (req, res) => {
    try {
        const foundBuyers = await buyerService.findBuyers(req.body);

        res.send(foundBuyers);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get buyer
 * id: int
 * @return Buyer || {}
 */
router.get('/:id', async (req, res) => {
    try {
        const foundBuyer = await buyerService.findBuyer(req.params.id);

        if (!foundBuyer) {
            throw new Error('Buyer not found');
        }

        res.send(foundBuyer);
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
 * id: int
 * @return Buyer || {}
 */
router.put('/update/:id', async (req, res) => {
    try {
        const foundBuyer = await buyerService.findBuyer(req.params.id);

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
