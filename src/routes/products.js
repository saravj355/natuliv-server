const router = require('express').Router();
const productService = require('../services/productService');

router.post('/', async (req, res) => {
    try {
        const filter = req.body;
        const products = await productService.getProducts(filter);

        res.send(products);
    } catch (error) {
        res.status(404).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
