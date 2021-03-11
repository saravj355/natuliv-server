module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'user_recomendation_variable',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
            hairShapeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'recomendation_variable_catalog',
                    key: 'id',
                },
            },
            hairTypeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'recomendation_variable_catalog',
                    key: 'id',
                },
            },
            skinTypeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'recomendation_variable_catalog',
                    key: 'id',
                },
            },
            genderId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'recomendation_variable_catalog',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            tableName: 'user_recomendation_variable',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'FK_URV_RecomendationVariableCatalog_idx',
                    using: 'BTREE',
                    fields: [{ name: 'hairShapeId' }],
                },
                {
                    name: 'FK_URV_User_idx',
                    using: 'BTREE',
                    fields: [{ name: 'userId' }],
                },
                {
                    name: 'FK_URV_RecomendationVariableCatalog_h_idx',
                    using: 'BTREE',
                    fields: [{ name: 'hairTypeId' }],
                },
                {
                    name: 'FK_URV_RecomendationVariableCatalog_g_idx',
                    using: 'BTREE',
                    fields: [{ name: 'genderId' }],
                },
                {
                    name: 'FK_URV_RecomendationVariableCatalog_s_idx',
                    using: 'BTREE',
                    fields: [{ name: 'skinTypeId' }],
                },
            ],
        }
    );
};
