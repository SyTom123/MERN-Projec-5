const express = require('express');
const router = express.Router();
const controller = require("../controllers/answer.controller");
const { userById } = require('../controllers/user.controller');
const { requiredSignIn, isAuth } = require('../middleware/checkAuth');

router.get("/",controller.index);

router.get("/:id",controller.detail);

router.post("/:userId",requiredSignIn ,isAuth, controller.createPost);

router.delete("/:id",controller.delete);

router.param("userId", userById);

module.exports = router;