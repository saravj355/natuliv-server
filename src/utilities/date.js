const dayjs = require('dayjs');

function getDate(format = 'DD-MM-YYYY HH:mm:ss Z[Z]') {
    console.log(dayjs().format(format));
}

module.exports = { getDate };
