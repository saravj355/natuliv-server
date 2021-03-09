const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define(
        'user_supplier',
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
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
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
        },
        {
            sequelize,
            tableName: 'user_supplier',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'FK_UserSupplier_User_idx',
                    using: 'BTREE',
                    fields: [{ name: 'userId' }],
                },
                {
                    name: 'FK_UserSupplier_Supplier_idx',
                    using: 'BTREE',
                    fields: [{ name: 'supplierId' }],
                },
            ],
        }
    );
};
