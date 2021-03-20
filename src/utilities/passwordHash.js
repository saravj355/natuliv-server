const MD5 = require('crypto-js/md5');

function getPasswordHash(password) {
    return MD5(password).toString();
}

module.exports = getPasswordHash;
