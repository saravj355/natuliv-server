const { sequelize } = require('./Sequelize');

async function assertDatabaseConnection() {
    console.log('Checking database connection...');
    try {
        await sequelize.authenticate();
        console.log('Database connected!');
    } catch (error) {
        console.log('Unable to connect to the database:', error.message);
    }
}

module.exports = assertDatabaseConnection;
