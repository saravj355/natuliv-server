const randomPassword = require('generate-password');

function generate() {
    return randomPassword.generate({ length: 10, numbers: true });
}

module.exports = { generate };
