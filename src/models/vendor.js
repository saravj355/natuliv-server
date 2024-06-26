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
                type: DataTypes.STRING(45),
                allowNull: false,
                unique: 'vendorId_UNIQUE',
            },
            name: {
                type: DataTypes.STRING(45),
                allowNull: false,
                unique: 'name_UNIQUE',
            },
            contactNumber: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            websiteUrl: {
                type: DataTypes.STRING(100),
                allowNull: true,
                unique: 'websiteUrl_UNIQUE',
            },
            logoPath: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            isActive: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 1,
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
                {
                    name: 'name_UNIQUE',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'name' }],
                },
                {
                    name: 'websiteUrl_UNIQUE',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'websiteUrl' }],
                },
            ],
        }
    );
};
