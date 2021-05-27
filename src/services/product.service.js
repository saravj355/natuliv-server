const { Filters, UUID } = require('../utilities');
const { Op } = require('sequelize');
const { models } = require('../db');
const ProductModel = models.product;

/**
 * Get list of products
 * @param { Object } filter: Query filters - Optional
 * @returns a collection of products || []
 */

async function getProducts(filter = {}) {
    const filters = Filters.handleDefaultFilters(filter);

    if (filter.name) {
        filters.where.name = { [Op.like]: `%${filter.name}%` };
    }

    if (filter.vendorId) {
        filters.where.vendorId = filter.vendorId;
    }

    if (filter.categoryId) {
        filters.where.productCategoryId = filter.categoryId;
    }

    return ProductModel.findAll({
        where: filters.where,
        offset: filters.offset,
        order: [filters.sort],
        limit: filters.limit,
        include: {
            model: models.product_category,
            as: 'productCategory',
        },
    });
}

/**
 * Find a product by a provided id
 * @param { Number } id: Required
 * @returns found product
 */

async function findProductById(id) {
    return ProductModel.findOne({
        where: { id },
        include: {
            model: models.product_category,
            as: 'productCategory',
        },
    });
}

/**
 * Create a product
 * @param { Object } newProduct: Required
 * @returns created product
 */

async function createProduct(newProduct) {
    newProduct.productId = UUID.generate();
    return ProductModel.create(newProduct);
}

/**
 * Update a product by a provided id
 * @param { Number } id: Required
 * @param { Object } product: Required
 * @returns the updated product
 */

async function updateProduct(id, product) {
    const foundProduct = findProductById(id);

    if (!foundProduct) {
        throw new Error('Product not found');
    }

    await ProductModel.update(product, {
        where: { id },
    });

    return findProductById(id);
}

module.exports = {
    findProductById,
    getProducts,
    createProduct,
    updateProduct,
};
