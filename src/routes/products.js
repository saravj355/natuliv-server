const router = require('express').Router();
const productService = require('../services/productService');
const categories = require('./categories');

router.use('/categories', categories);

/**
 * Get products
 * req : filter: {}
 * @return Products || {}
 */
router.get('/', async (req, res) => {
    try {
        const foundProducts = await productService.findProducts(req.query);

        res.send(foundProducts);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get product
 * id: int
 * @return Product
 */
router.get('/:id', async (req, res) => {
    try {
        const foundProduct = await productService.findProduct(req.params.id);

        if (!foundProduct) {
            throw new Error('Product not found');
        }

        res.send(foundProduct);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Create product
 * product: object
 * @return Product
 */
router.post('/create', async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);

        res.send(product);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update product
 * id: int
 * @return Product || {}
 */
router.put('/update/:id', async (req, res) => {
    try {
        const foundProduct = await productService.findProduct(req.params.id);

        if (!foundProduct) {
            throw new Error('Product not found');
        }

        await productService.updateProduct(req.params.id, req.body);

        res.send('Product has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
