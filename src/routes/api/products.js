const router = require('express').Router();
const productService = require('../../services/product.service');

/**
 * Create a product
 * @param { Object } req.body
 * @return new product
 */

router.post('/', async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.send(product);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get list of products
 * @param {*} req.query filters are supported through query parameters.
 * @return collection of products || []
 */

router.get('/', async (req, res) => {
    try {
        const foundProducts = await productService.getProducts(req.query);
        res.send(foundProducts);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Find a specific product
 * @param { Number } id: Required
 * @return product || {}
 */

router.get('/:id', async (req, res) => {
    try {
        const foundProduct = await productService.findProductById(
            req.params.id
        );

        res.send(foundProduct);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update a specific product
 * @param { Number } id: Required
 * @return product updated || {}
 */

router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await productService.updateProduct(
            req.params.id,
            req.body
        );

        res.send(updatedProduct);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
