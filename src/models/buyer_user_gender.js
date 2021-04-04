module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'buyer_user_gender',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'buyer_user_gender',
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
