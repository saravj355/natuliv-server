const MD5 = require('crypto-js/md5');
const randomPassword = require('generate-password');

/**
 * generate a password hash MD5 format
 * @param {*} password: Required
 * @returns password hash
 */

function generate(password) {
    return MD5(password).toString();
}

/**
 * validate password hash equality
 * @param {*} passwordHash: Required
 * @param {*} password: Required
 * @returns boolean
 */

function hashEqual(passwordHash, password) {
    return generate(password) === passwordHash;
}

/**
 * Get a random password hash
 * @returns password
 */

function random() {
    return generate(randomPassword.generate({ length: 10, numbers: true }));
}

module.exports = { generate, hashEqual, random };
