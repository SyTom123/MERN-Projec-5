const express = require('express');
const router = express.Router();
const controller = require("../controllers/answer.controller");

router.get("/",controller.index);

router.get("/:id",controller.detail);

router.post("/",controller.createPost);

router.delete("/:id",controller.delete);


module.exports = router;