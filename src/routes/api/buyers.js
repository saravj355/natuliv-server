const router = require('express').Router();
const buyerUserService = require('../../services/buyer.service');

/**
 * Create a buyer user
 * @param { Object } req.body
 * @return new buyer user
 */

router.post('/', async (req, res) => {
    try {
        const buyer = await buyerUserService.createBuyer(req.body);
        res.send(buyer);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get list of buyers
 * @param {*} req.query filters are supported through query parameters.
 * @return collection of buyers || []
 */

router.get('/', async (req, res) => {
    try {
        const foundBuyers = await buyerUserService.getBuyers(req.query);
        res.send(foundBuyers);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Find a specific buyer user
 * @param { Number } id: Required
 * @return buyer user || {}
 */

router.get('/:id', async (req, res) => {
    try {
        const foundBuyer = await buyerUserService.findBuyerById(req.params.id);
        res.send(foundBuyer);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update buyer user by a provided id
 * @param { Number } id: Required
 * @return buyer user updated|| {}
 */

router.put('/:id', async (req, res) => {
    try {
        const updatedBuyer = await buyerUserService.updateBuyer(
            req.params.id,
            req.body
        );

        res.send(updatedBuyer);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
