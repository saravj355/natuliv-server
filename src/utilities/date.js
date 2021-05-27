const dayjs = require('dayjs');

/**
 * Get the actual date
 * @param { String } format :Optional
 * @returns the actual date
 */

function getDate(format = 'YYYY-MM-DD HH:mm:ssZ[Z]') {
    return dayjs().format(format);
}

module.exports = { getDate };
