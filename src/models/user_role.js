const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define(
        'user_role',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            keyName: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            displayName: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'user_role',
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
