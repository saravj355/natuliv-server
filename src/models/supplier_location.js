const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define(
        'supplier_location',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            supplierId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'supplier',
                    key: 'id',
                },
            },
            address: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            long: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            lat: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            country: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'supplier_location',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'FK_SupplierLocation_Supplier_idx',
                    using: 'BTREE',
                    fields: [{ name: 'supplierId' }],
                },
            ],
        }
    );
};
