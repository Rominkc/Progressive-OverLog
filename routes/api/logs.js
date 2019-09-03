const express = require('express');
const router = express.Router();
// @route  GET api/log
// @desc   Test route
// @access Public
router.get('/', (req, res) => res.send('Logs route'));

module.exports = router;
