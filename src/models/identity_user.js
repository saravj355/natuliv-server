module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'identity_user',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            identityUserId: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false,
                unique: 'email_UNIQUE',
            },
            passwordHash: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            creationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            lastLoginDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            lastUpdateDate: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            isActive: {
                type: DataTypes.TINYINT,
                allowNull: false,
            },
            identityUserRoleId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'identity_user_role',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            tableName: 'identity_user',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'email_UNIQUE',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'email' }],
                },
                {
                    name: 'FK_IdentityUser_IdentityUserRole_idx',
                    using: 'BTREE',
                    fields: [{ name: 'identityUserRoleId' }],
                },
            ],
        }
    );
};
