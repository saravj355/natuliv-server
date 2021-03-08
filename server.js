require('dotenv').config();
const chalk = require('chalk');
const express = require('express');
const app = express();
const PORT = process.env.PORT;

//body parser middleware
app.use(express.json());

app.use('/', (req, res) => {
    res.send('Home');
});

function init() {
    app.listen(PORT, () => {
        console.log(chalk.blue.bold(`Server on port http://localhost:${PORT}`));
    });
}

init();
