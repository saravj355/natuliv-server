module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'buyer_user',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            bornDate: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            genderId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'buyer_user_gender',
                    key: 'id',
                },
            },
            lastSurveyFillDate: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING(45),
                allowNull: false,
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
            tableName: 'buyer_user',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'FK_BuyerUser_IdentityUser_idx',
                    using: 'BTREE',
                    fields: [{ name: 'identityUserId' }],
                },
                {
                    name: 'FK_BuyerUser_BuyerUserGender_idx',
                    using: 'BTREE',
                    fields: [{ name: 'genderId' }],
                },
            ],
        }
    );
};
