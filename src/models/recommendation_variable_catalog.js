module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'recommendation_variable_catalog',
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
            tableName: 'recommendation_variable_catalog',
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
