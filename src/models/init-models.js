var DataTypes = require('sequelize').DataTypes;
var _buyer_recommendation_variable = require('./buyer_recommendation_variable');
var _buyer_user = require('./buyer_user');
var _buyer_user_gender = require('./buyer_user_gender');
var _identity_user = require('./identity_user');
var _identity_user_role = require('./identity_user_role');
var _product = require('./product');
var _product_category = require('./product_category');
var _question = require('./question');
var _recommendation_variable_catalog = require('./recommendation_variable_catalog');
var _survey_response = require('./survey_response');
var _vendor = require('./vendor');
var _vendor_location = require('./vendor_location');
var _vendor_user = require('./vendor_user');

function initModels(sequelize) {
    var buyer_recommendation_variable = _buyer_recommendation_variable(
        sequelize,
        DataTypes
    );
    var buyer_user = _buyer_user(sequelize, DataTypes);
    var buyer_user_gender = _buyer_user_gender(sequelize, DataTypes);
    var identity_user = _identity_user(sequelize, DataTypes);
    var identity_user_role = _identity_user_role(sequelize, DataTypes);
    var product = _product(sequelize, DataTypes);
    var product_category = _product_category(sequelize, DataTypes);
    var question = _question(sequelize, DataTypes);
    var recommendation_variable_catalog = _recommendation_variable_catalog(
        sequelize,
        DataTypes
    );
    var survey_response = _survey_response(sequelize, DataTypes);
    var vendor = _vendor(sequelize, DataTypes);
    var vendor_location = _vendor_location(sequelize, DataTypes);
    var vendor_user = _vendor_user(sequelize, DataTypes);

    buyer_recommendation_variable.belongsTo(buyer_user, {
        as: 'buyerUser',
        foreignKey: 'buyerUserId',
    });
    buyer_user.hasMany(buyer_recommendation_variable, {
        as: 'buyer_recommendation_variables',
        foreignKey: 'buyerUserId',
    });
    survey_response.belongsTo(buyer_user, {
        as: 'buyerUser',
        foreignKey: 'buyerUserId',
    });
    buyer_user.hasMany(survey_response, {
        as: 'survey_responses',
        foreignKey: 'buyerUserId',
    });
    buyer_user.belongsTo(buyer_user_gender, {
        as: 'gender',
        foreignKey: 'genderId',
    });
    buyer_user_gender.hasMany(buyer_user, {
        as: 'buyer_users',
        foreignKey: 'genderId',
    });
    buyer_user.belongsTo(identity_user, {
        as: 'identityUser',
        foreignKey: 'identityUserId',
    });
    identity_user.hasMany(buyer_user, {
        as: 'buyer_users',
        foreignKey: 'identityUserId',
    });
    vendor_user.belongsTo(identity_user, {
        as: 'identityUser',
        foreignKey: 'identityUserId',
    });
    identity_user.hasMany(vendor_user, {
        as: 'vendor_users',
        foreignKey: 'identityUserId',
    });
    identity_user.belongsTo(identity_user_role, {
        as: 'identityUserRole',
        foreignKey: 'identityUserRoleId',
    });
    identity_user_role.hasMany(identity_user, {
        as: 'identity_users',
        foreignKey: 'identityUserRoleId',
    });
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
    buyer_recommendation_variable.belongsTo(recommendation_variable_catalog, {
        as: 'hairShape',
        foreignKey: 'hairShapeId',
    });
    recommendation_variable_catalog.hasMany(buyer_recommendation_variable, {
        as: 'buyer_recommendation_variables',
        foreignKey: 'hairShapeId',
    });
    buyer_recommendation_variable.belongsTo(recommendation_variable_catalog, {
        as: 'hairType',
        foreignKey: 'hairTypeId',
    });
    recommendation_variable_catalog.hasMany(buyer_recommendation_variable, {
        as: 'hairType_buyer_recommendation_variables',
        foreignKey: 'hairTypeId',
    });
    buyer_recommendation_variable.belongsTo(recommendation_variable_catalog, {
        as: 'skinType',
        foreignKey: 'skinTypeId',
    });
    recommendation_variable_catalog.hasMany(buyer_recommendation_variable, {
        as: 'skinType_buyer_recommendation_variables',
        foreignKey: 'skinTypeId',
    });
    product.belongsTo(vendor, { as: 'vendor', foreignKey: 'vendorId' });
    vendor.hasMany(product, { as: 'products', foreignKey: 'vendorId' });
    vendor_location.belongsTo(vendor, { as: 'vendor', foreignKey: 'vendorId' });
    vendor.hasMany(vendor_location, {
        as: 'vendor_locations',
        foreignKey: 'vendorId',
    });
    vendor_user.belongsTo(vendor, { as: 'vendor', foreignKey: 'vendorId' });
    vendor.hasMany(vendor_user, { as: 'vendor_users', foreignKey: 'vendorId' });

    return {
        buyer_recommendation_variable,
        buyer_user,
        buyer_user_gender,
        identity_user,
        identity_user_role,
        product,
        product_category,
        question,
        recommendation_variable_catalog,
        survey_response,
        vendor,
        vendor_location,
        vendor_user,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
