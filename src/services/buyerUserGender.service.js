const { models } = require('../db');
const BuyerGenderModel = models.buyer_user_gender;

async function getGenderByKeyName(keyName) {
    return BuyerGenderModel.findOne({
        where: { keyName },
    });
}

module.exports = { getGenderByKeyName };
