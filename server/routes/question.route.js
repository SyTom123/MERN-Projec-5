const express = require('express');
const router = express.Router();
const controller = require("../controllers/question.controller");

router.get("/",controller.index);

module.exports = router;