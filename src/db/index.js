const { Sequelize } = require('sequelize');
const { Config } = require('../config/db');

const sequelize = new Sequelize({
    dialect: 'mysql',
    database: Config.db.name,
    username: Config.db.username,
    password: Config.db.password,
    port: Config.db.port,
    host: Config.db.host,
});

const modelDefiners = [require('../model/User')];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

module.exports = sequelize;
