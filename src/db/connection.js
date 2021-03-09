const sequelize = require('./index');

async function assertDatabaseConnection() {
    console.log('Checking database connection...');
    try {
        await sequelize.authenticate();

        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:', error.message);
    }
}

module.exports = { connection: assertDatabaseConnection };
