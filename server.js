require('dotenv').config();
const chalk = require('chalk');
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const database = require('./src/db/connection');

//body parser middleware
app.use(express.json());

app.use('/', (req, res) => {
    res.send('Home');
});

async function init() {
    await database.connection();

    app.listen(PORT, () => {
        console.log(chalk.blue.bold(`Server on port http://localhost:${PORT}`));
    });
}

init();
