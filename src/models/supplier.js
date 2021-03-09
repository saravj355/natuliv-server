const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define(
        'supplier',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            supplierId: {
                type: DataTypes.STRING(20),
                allowNull: false,
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
            isActive: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 1,
            },
            creationDate: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'supplier',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
            ],
        }
    );
};
