module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'vendor',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            vendorId: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: 'vendorId_UNIQUE',
            },
            name: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            contactNumber: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            websiteUrl: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            logoPath: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'vendor',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'vendorId_UNIQUE',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'vendorId' }],
                },
            ],
        }
    );
};
