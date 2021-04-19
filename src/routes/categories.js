const router = require('express').Router();
const categoryService = require('../services/categoryService');

/**
 * Get product categories
 * req : filter: {}
 * @return Categories || {}
 */
router.get('/', async (req, res) => {
    try {
        const foundCategories = await categoryService.findAll(req.query);

        res.send(foundCategories);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
