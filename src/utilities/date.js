const dayjs = require('dayjs');

function getDate(format = 'YYYY-MM-DD HH:mm:ssZ[Z]') {
    return dayjs().format(format);
}

module.exports = getDate;
