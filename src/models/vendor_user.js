module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'vendor_user',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            vendorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'vendor',
                    key: 'id',
                },
            },
            identityUserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'identity_user',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            tableName: 'vendor_user',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'FK_UserSupplier_Supplier_idx',
                    using: 'BTREE',
                    fields: [{ name: 'vendorId' }],
                },
                {
                    name: 'FK_VendorUser_IdentityUser_idx',
                    using: 'BTREE',
                    fields: [{ name: 'identityUserId' }],
                },
            ],
        }
    );
};
