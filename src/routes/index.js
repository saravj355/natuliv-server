const router = require('express').Router();
const api = require('./api');

//route
router.use('/api', api);

module.exports = router;
