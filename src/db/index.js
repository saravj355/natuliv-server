const { Sequelize } = require('sequelize');
const { Config } = require('../config/db');

const sequelize = new Sequelize({
    dialect: Config.db.dialect,
    database: Config.db.name,
    username: Config.db.username,
    password: Config.db.password,
    port: Config.db.port,
    host: Config.db.host,
});

const modelDefiners = [
    require('../models/user_supplier'),
    require('../models/user_role'),
    require('../models/user_recomendation_variable'),
    require('../models/user'),
    require('../models/survey_response'),
    require('../models/supplier_location'),
    require('../models/supplier'),
    require('../models/recomendation_variable_catalog'),
    require('../models/question'),
    require('../models/product_category'),
    require('../models/product'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

module.exports = sequelize;
