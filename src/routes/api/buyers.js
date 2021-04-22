const router = require('express').Router();
const buyerService = require('../../services/buyer.service');

/**
 * Get buyers
 * req : filter: {}
 * @return Buyers || {}
 */
router.get('/', async (req, res) => {
    try {
        const foundBuyers = await buyerService.getBuyers(req.query);

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
        const foundBuyer = await buyerService.findBuyerById(req.params.id);

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
 * id: int
 * @return Buyer
 */
router.post('/', async (req, res) => {
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
router.put('/:id', async (req, res) => {
    try {
        const foundBuyer = await buyerService.findBuyerById(req.params.id);

        if (!foundBuyer) {
            throw new Error('Buyer not found');
        }

        const updatedBuyer = await buyerService.updateBuyer(
            req.params.id,
            req.body
        );

        res.send(updatedBuyer);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
