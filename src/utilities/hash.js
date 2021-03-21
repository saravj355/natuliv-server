const MD5 = require('crypto-js/md5');

function generate(password) {
    return MD5(password).toString();
}

function hashEqual(passwordHash, password) {
    return generate(password) === passwordHash;
}

module.exports = { generate, hashEqual };
