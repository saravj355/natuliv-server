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
            buyerId: {
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
            genderId: {
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
                    name:
                        'FK_UserRecomendationVariable_RecomendationVariableCatalog_idx',
                    using: 'BTREE',
                    fields: [{ name: 'hairShapeId' }],
                },
                {
                    name: 'FK_UserRecomendationVariable_User_idx',
                    using: 'BTREE',
                    fields: [{ name: 'buyerId' }],
                },
                {
                    name:
                        'FK_UserRecomendationVariable_RecomendationVariableCatalog_h_idx',
                    using: 'BTREE',
                    fields: [{ name: 'hairTypeId' }],
                },
                {
                    name:
                        'FK_UserRecomendationVariable_RecomendationVariableCatalog_g_idx',
                    using: 'BTREE',
                    fields: [{ name: 'genderId' }],
                },
                {
                    name:
                        'FK_UserRecomendationVariable_RecomendationVariableCatalog_s_idx',
                    using: 'BTREE',
                    fields: [{ name: 'skinTypeId' }],
                },
            ],
        }
    );
};
