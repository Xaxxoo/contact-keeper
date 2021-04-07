const express = require('express');
const router = express.Router();

// @Route GET api/auth
// @desc get logged in user
//@access Private
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

// @Route POST api/auth
// @desc auth user and get token
//@access Public
router.get('/', (req, res) => {
    res.send('logg in a user');
});

module.exports = router;
