const express = require('express');
const userRouter = require('./user.js');

// Single routing
const router = express.Router();

router.use("/user", userRouter);

module.exports = router;

