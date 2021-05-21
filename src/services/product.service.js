const { Filters, UUID } = require('../utilities');
const { Op } = require('sequelize');
const { models } = require('../db');
const ProductModel = models.product;

function getProductsFilters(filter = {}) {
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

    return filters;
}

async function getProducts(filter = {}) {
    const filters = getProductsFilters(filter);

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

async function findProductById(id) {
    return ProductModel.findOne({
        where: { id },
        include: {
            model: models.product_category,
            as: 'productCategory',
        },
    });
}

async function createProduct(newProduct) {
    newProduct.productId = UUID.generate();
    return ProductModel.create(newProduct);
}

async function updateProduct(id, product) {
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
