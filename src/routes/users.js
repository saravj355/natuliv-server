const router = require('express').Router();
const { isEmpty } = require('../utilities/validate');
const userService = require('../services/userService');

/**
 * Get an user
 * userId: int
 * @return User || {}
 */
router.get('/get-user/:id', async (req, res) => {
    try {
        const foundUser = await userService.getUser(req.params.id);

        if (!foundUser) {
            throw new Error('User doesn\'t exists');
        }

        res.send(foundUser);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Get all users
 * req : filter: {}
 * @return Users []
 */
router.post('/get-users', async (req, res) => {
    try {
        const users = await userService.getUsers(req.body);

        res.send(users);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

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
