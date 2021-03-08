require('dotenv').config();

const db = {
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
};

const Config = {
    db,
};

module.exports = { Config };
