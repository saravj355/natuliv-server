const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'user',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            passwordHash: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            lastUpdateDate: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            creationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            lastLoginDate: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            bornDate: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            userRoleId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user_role',
                    key: 'id',
                },
            },
            isActive: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 1,
            },
            lastSurveyFillDate: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            country: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'user',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'FK_User_UserRole_idx',
                    using: 'BTREE',
                    fields: [{ name: 'userRoleId' }],
                },
            ],
        }
    );
};
