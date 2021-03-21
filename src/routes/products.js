const router = require('express').Router();
const productService = require('../services/productService');

/**
 * Get a product
 * productId: int
 * @return Product || {}
 */
router.get('/get-product/:id', async (req, res) => {
    try {
        const foundProduct = await productService.getProduct(req.params.id);

        if (!foundProduct) {
            throw new Error('Product doesn\'t exists');
        }

        res.send(foundProduct);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get all products
 * req : filter: {}
 * @return Products []
 */
router.post('/get-products', async (req, res) => {
    try {
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
router.post('/create-product', async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);

        res.send(product);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update a product
 * productId: int
 * @return Product || {}
 */
router.put('/update-product/:id', async (req, res) => {
    try {
        const foundProduct = await productService.getProduct(req.params.id);

        if (!foundProduct) {
            throw new Error('Product doesn\'t exists');
        }

        await productService.updateProduct(req.params.id, req.body);

        res.send('Product has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * update a product status
 * productId: int
 */
router.put('/update-product-status/:id', async (req, res) => {
    try {
        const foundProduct = await productService.getProduct(req.params.id);

        if (!foundProduct) {
            throw new Error('Product doesn\'t exists');
        }

        await productService.updateProductStatus(foundProduct);

        res.send('Product status has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
