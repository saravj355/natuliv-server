const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define(
        'product',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            productId: {
                type: DataTypes.STRING(20),
                allowNull: false,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: 'product_id must be required',
                    },
                },
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: 'name must be required',
                    },
                    isAlpha: {
                        args: true,
                        msg: 'name must be only strings',
                    },
                },
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            price: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                validate: {
                    min: {
                        args: 0,
                        msg: 'price must be greater than 0',
                    },
                },
            },
            supplierId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'supplier',
                    key: 'id',
                },
            },
            imagePath: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            productCategoryId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'product_category',
                    key: 'id',
                },
            },
            isActive: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 1,
            },
        },
        {
            sequelize,
            tableName: 'product',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'FK_Product_ProductCategory_idx',
                    using: 'BTREE',
                    fields: [{ name: 'productCategoryId' }],
                },
                {
                    name: 'FK_Product_Supplier_idx',
                    using: 'BTREE',
                    fields: [{ name: 'supplierId' }],
                },
            ],
        }
    );
};
