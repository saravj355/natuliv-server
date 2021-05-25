require('dotenv').config();

const chalk = require('chalk');
const express = require('express');
const database = require('./src/db');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const routes = require('./src/routes');

//body parser middleware
app.use(express.json());

app.use(cors());

app.use(routes);

async function init() {
    await database.connection();

    app.listen(PORT, () => {
        console.log(
            chalk.green.bold(`Server on port http://localhost:${PORT}`)
        );
    });
}

init();
