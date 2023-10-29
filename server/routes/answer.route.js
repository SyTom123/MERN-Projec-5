const express = require('express');
const router = express.Router();
const controller = require("../controllers/answer.controller");

router.get("/",controller.index);

router.get("/:id",controller.detail);

router.post("/",controller.createPost);

// router.get("/:id",controller.detail);

module.exports = router;