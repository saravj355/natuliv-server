var DataTypes = require('sequelize').DataTypes;
var _product = require('./product');
var _product_category = require('./product_category');
var _question = require('./question');
var _recomendation_variable_catalog = require('./recomendation_variable_catalog');
var _supplier = require('./supplier');
var _supplier_location = require('./supplier_location');
var _survey_response = require('./survey_response');
var _user = require('./user');
var _user_recomendation_variable = require('./user_recomendation_variable');
var _user_role = require('./user_role');
var _user_supplier = require('./user_supplier');

function initModels(sequelize) {
    var product = _product(sequelize, DataTypes);
    var product_category = _product_category(sequelize, DataTypes);
    var question = _question(sequelize, DataTypes);
    var recomendation_variable_catalog = _recomendation_variable_catalog(
        sequelize,
        DataTypes
    );
    var supplier = _supplier(sequelize, DataTypes);
    var supplier_location = _supplier_location(sequelize, DataTypes);
    var survey_response = _survey_response(sequelize, DataTypes);
    var user = _user(sequelize, DataTypes);
    var user_recomendation_variable = _user_recomendation_variable(
        sequelize,
        DataTypes
    );
    var user_role = _user_role(sequelize, DataTypes);
    var user_supplier = _user_supplier(sequelize, DataTypes);

    product.belongsTo(product_category, {
        as: 'productCategory',
        foreignKey: 'productCategoryId',
    });
    product_category.hasMany(product, {
        as: 'products',
        foreignKey: 'productCategoryId',
    });
    survey_response.belongsTo(question, {
        as: 'question',
        foreignKey: 'questionId',
    });
    question.hasMany(survey_response, {
        as: 'survey_responses',
        foreignKey: 'questionId',
    });
    user_recomendation_variable.belongsTo(recomendation_variable_catalog, {
        as: 'hairShape',
        foreignKey: 'hairShapeId',
    });
    recomendation_variable_catalog.hasMany(user_recomendation_variable, {
        as: 'user_recomendation_variables',
        foreignKey: 'hairShapeId',
    });
    user_recomendation_variable.belongsTo(recomendation_variable_catalog, {
        as: 'hairType',
        foreignKey: 'hairTypeId',
    });
    recomendation_variable_catalog.hasMany(user_recomendation_variable, {
        as: 'hairType_user_recomendation_variables',
        foreignKey: 'hairTypeId',
    });
    user_recomendation_variable.belongsTo(recomendation_variable_catalog, {
        as: 'skinType',
        foreignKey: 'skinTypeId',
    });
    recomendation_variable_catalog.hasMany(user_recomendation_variable, {
        as: 'skinType_user_recomendation_variables',
        foreignKey: 'skinTypeId',
    });
    user_recomendation_variable.belongsTo(recomendation_variable_catalog, {
        as: 'gender',
        foreignKey: 'genderId',
    });
    recomendation_variable_catalog.hasMany(user_recomendation_variable, {
        as: 'gender_user_recomendation_variables',
        foreignKey: 'genderId',
    });
    product.belongsTo(supplier, { as: 'supplier', foreignKey: 'supplierId' });
    supplier.hasMany(product, { as: 'products', foreignKey: 'supplierId' });
    supplier_location.belongsTo(supplier, {
        as: 'supplier',
        foreignKey: 'supplierId',
    });
    supplier.hasMany(supplier_location, {
        as: 'supplier_locations',
        foreignKey: 'supplierId',
    });
    user_supplier.belongsTo(supplier, {
        as: 'supplier',
        foreignKey: 'supplierId',
    });
    supplier.hasMany(user_supplier, {
        as: 'user_suppliers',
        foreignKey: 'supplierId',
    });
    survey_response.belongsTo(user, { as: 'user', foreignKey: 'userId' });
    user.hasMany(survey_response, {
        as: 'survey_responses',
        foreignKey: 'userId',
    });
    user_recomendation_variable.belongsTo(user, {
        as: 'user',
        foreignKey: 'userId',
    });
    user.hasMany(user_recomendation_variable, {
        as: 'user_recomendation_variables',
        foreignKey: 'userId',
    });
    user_supplier.belongsTo(user, { as: 'user', foreignKey: 'userId' });
    user.hasMany(user_supplier, { as: 'user_suppliers', foreignKey: 'userId' });
    user.belongsTo(user_role, { as: 'userRole', foreignKey: 'userRoleId' });
    user_role.hasMany(user, { as: 'users', foreignKey: 'userRoleId' });

    return {
        product,
        product_category,
        question,
        recomendation_variable_catalog,
        supplier,
        supplier_location,
        survey_response,
        user,
        user_recomendation_variable,
        user_role,
        user_supplier,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
