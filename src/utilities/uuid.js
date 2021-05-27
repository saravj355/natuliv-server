const { v4: uuidv4 } = require('uuid');

/**
 * generate uuid
 * @returns uuid
 */

function generate() {
    return uuidv4();
}

module.exports = { generate };
