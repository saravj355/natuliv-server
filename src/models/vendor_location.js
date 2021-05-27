module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'vendor_location',
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
            address: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            long: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            lat: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'vendor_location',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'FK_VendorLocation_Vendor_idx',
                    using: 'BTREE',
                    fields: [{ name: 'vendorId' }],
                },
            ],
        }
    );
};
