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

        if (!product) {
            throw new Error('The product doesnt exists');
        }

        res.send(product);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get products
 * req : { filter : supplierId, productCategoryId, isActive,
    price: lowerThan, greaterThan
    limit
 * @return Products []
 */
router.post('/getProducts', async (req, res) => {
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

/**
 * Update product
 * productId: int
 * @return Product || {}
 */
router.put('/updateProduct/:id', async (req, res) => {
    try {
        if (!req.params.id) {
            throw new Error('id cannot be empty');
        }
        const foundProduct = await productService.getProduct(req.params.id);

        if (!foundProduct) {
            throw new Error('The product doesnt exists');
        }

        await productService.updateProduct(req.params.id, req.body);

        res.send('Product updated successfully');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * disable product
 * productId: int
 */
router.put('/disableProduct/:id', async (req, res) => {
    try {
        const foundProduct = await productService.getProduct(req.params.id);

        if (!foundProduct) {
            throw new Error('The product doesnt exists');
        }

        await productService.disableProduct(foundProduct);

        res.send(foundProduct);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
