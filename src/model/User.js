const { DataTypes } = require('sequelize');
const Date = new Date();

module.exports = (sequelize) => {
    sequelize.define(
        'User',
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            userId: {
                unique: true,
                allowNull: false,
                type: DataTypes.UUIDV4,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
            lastName: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
            passwordHash: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
            lastUpdateDate: {
                allowNull: true,
                type: 'TIMESTAMP',
                defaultValue: Date,
            },
            creationDate: {
                allowNull: false,
                type: 'TIMESTAMP',
                defaultValue: Date,
            },
            lastLoginDate: {
                allowNull: true,
                type: 'TIMESTAMP',
                defaultValue: Date,
            },
            bornDate: {
                allowNull: false,
                type: DataTypes.DATEONLY,
            },
            gender: {
                allowNull: false,
                type: DataTypes.STRING(20),
            },
            userRoleId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: UserRole,
                    key: 'id',
                },
            },
            isActive: {
                allowNull: false,
                type: DataTypes.TINYINT,
                defaultValue: true,
            },
            lastSurveyFillDate: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: Date,
            },
            country: {
                allowNull: false,
                type: DataTypes.STRING(40),
            },
        },
        { timestamps: false, freezeTableName: true, tableName: 'User' }
    );
};
