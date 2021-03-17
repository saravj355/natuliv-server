module.exports = function (sequelize, DataTypes) {
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
                validate: {
                    notEmpty: {
                        args: true,
                        msg: 'name is required',
                    },
                },
            },
            contactNumber: {
                type: DataTypes.STRING(45),
                allowNull: false,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: 'contact number is required',
                    },
                    isNumeric: true,
                },
            },
            websiteUrl: {
                type: DataTypes.STRING(100),
                allowNull: true,
                validate: {
                    isUrl: {
                        args: true,
                        msg: 'product_id must be required',
                    },
                },
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
