module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'buyer_recommendation_variable',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            buyerUserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'buyer_user',
                    key: 'id',
                },
            },
            hairShapeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'recommendation_variable_catalog',
                    key: 'id',
                },
            },
            hairTypeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'recommendation_variable_catalog',
                    key: 'id',
                },
            },
            skinTypeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'recommendation_variable_catalog',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            tableName: 'buyer_recommendation_variable',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'FK_BRV_BuyerUser_idx',
                    using: 'BTREE',
                    fields: [{ name: 'buyerUserId' }],
                },
                {
                    name: 'FK_BRV_RVC_HS_idx',
                    using: 'BTREE',
                    fields: [{ name: 'hairShapeId' }],
                },
                {
                    name: 'FK_BRV_RVC_HT_idx',
                    using: 'BTREE',
                    fields: [{ name: 'hairTypeId' }],
                },
                {
                    name: 'FK_BRV_RVC_ST_idx',
                    using: 'BTREE',
                    fields: [{ name: 'skinTypeId' }],
                },
            ],
        }
    );
};
