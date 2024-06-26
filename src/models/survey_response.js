module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'survey_response',
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
            questionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'question',
                    key: 'id',
                },
            },
            response: {
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            surveyResponseCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            sequelize,
            tableName: 'survey_response',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'FK_SurevyResponse_Question_idx',
                    using: 'BTREE',
                    fields: [{ name: 'questionId' }],
                },
                {
                    name: 'FK_SurveyResponse_User_idx',
                    using: 'BTREE',
                    fields: [{ name: 'buyerUserId' }],
                },
            ],
        }
    );
};
