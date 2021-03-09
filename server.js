require('dotenv').config();

const chalk = require('chalk');
const express = require('express');
const database = require('./src/db/connection');

const app = express();
const PORT = process.env.PORT;

const routes = require('./src/routes');

//body parser middleware
app.use(express.json());

//routes
app.use(routes);

async function init() {
    await database.connection();

    app.listen(PORT, () => {
        console.log(chalk.blue.bold(`Server on port http://localhost:${PORT}`));
    });
}

init();
