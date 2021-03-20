const router = require('express').Router();
const { isEmpty } = require('../utilities/validate');
const userService = require('../services/userService');

/**
 * Create an user
 * user: object
 * @return user
 */
router.post('/create-user', async (req, res) => {
    try {
        if (isEmpty(req.body)) {
            throw new Error('User cannot be empty');
        }

        const user = await userService.createUser(req.body);

        res.send(user);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
