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
                type: DataTypes.STRING(20),
                allowNull: false,
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
