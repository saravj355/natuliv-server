const router = require('express').Router();
const userService = require('../services/userService');

/**
 * Get an user
 * userId: int
 * @return User || {}
 */
router.get('/:id', async (req, res) => {
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
router.post('/search', async (req, res) => {
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
router.post('/create', async (req, res) => {
    try {
        const user = await userService.createUser(req.body);

        res.send(user);
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

/**
 * Update an user
 * userId: int
 * @return User || {}
 */
router.put('/update/:id', async (req, res) => {
    try {
        const foundUser = await userService.getUser(req.params.id);

        if (!foundUser) {
            throw new Error('User doesn\'t exists');
        }

        await userService.updateUser(req.params.id, req.body);

        res.send('User has been updated');
    } catch (error) {
        res.status(400).send(`An error ocurred: ${error}`);
    }
});

module.exports = router;
