const { Sequelize } = require('sequelize');
const initModels = require('../models/init-models');
const { Config } = require('../config/config.db');

const sequelize = new Sequelize({
    dialect: Config.db.dialect,
    database: Config.db.name,
    username: Config.db.username,
    password: Config.db.password,
    port: Config.db.port,
    host: Config.db.host,
});

const models = initModels(sequelize);

module.exports = { sequelize, models };
