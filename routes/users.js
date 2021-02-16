// We need to bring in express so we can use the router
const express = require('express');
const router = express.Router();

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
