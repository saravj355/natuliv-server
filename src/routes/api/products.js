const router = require('express').Router();
const productService = require('../../services/product.service');

/**
 * Get products categories
 * @return Categories || {}
 */
router.get('/categories', async (req, res) => {
    try {
        const foundCategories = await productService.getProductCategories();
        res.send(foundCategories);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get products
 * req : filter: {}
 * @return Products || {}
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
 * Get product
 * id: int
 * @return Product
 */
router.get('/:id', async (req, res) => {
    try {
        const foundProduct = await productService.findProductById(
            req.params.id
        );

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
router.post('/', async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        console.log(product);
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
router.put('/:id', async (req, res) => {
    try {
        const foundProduct = await productService.findProductById(
            req.params.id
        );

        if (!foundProduct) {
            throw new Error('Product not found');
        }

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
