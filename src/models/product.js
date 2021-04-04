module.exports = function (sequelize, DataTypes) {
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
                type: DataTypes.STRING(36),
                allowNull: false,
                unique: 'productId_UNIQUE',
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            price: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            vendorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'vendor',
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
                    name: 'productId_UNIQUE',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'productId' }],
                },
                {
                    name: 'FK_Product_ProductCategory_idx',
                    using: 'BTREE',
                    fields: [{ name: 'productCategoryId' }],
                },
                {
                    name: 'FK_Product_Vendor_idx',
                    using: 'BTREE',
                    fields: [{ name: 'vendorId' }],
                },
            ],
        }
    );
};
