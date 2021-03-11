const router = require('express').Router();
const productService = require('../services/productService');

/**
 * Get product
 * productId: int
 * @return Product || {}
 */
router.get('/getProduct/:id', async (req, res) => {
    try {
        if (!req.params.id) {
            throw new Error('id cannot be empty');
        }
        const product = await productService.getProduct(req.params.id);

        res.send(product);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get products
 * req : { filter : ProductFilter }
 * @return Products []
 */
router.post('/getProducts', async (req, res) => {
    try {
        if (!req.body) {
            throw new Error('product cannot be empty');
        }
        const products = await productService.getProducts(req.body);

        res.send(products);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Create a product
 * req : { product: Product }
 * @return Product
 */
router.post('/createProduct', async (req, res) => {
    try {
        if (!req.body) {
            throw new Error('product cannot be empty');
        }
        const product = await productService.createProduct(req.body);
        res.send(product);
    } catch (error) {
        res.status(400).send(
            `An error ocurred while creating the product: ${error}`
        );
    }
});

module.exports = router;
