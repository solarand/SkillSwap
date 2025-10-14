const express = require("express");
const Router = require("express").Router;
const regestrationController = require("../controllers/regestragion-controller");
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = new Router();

router.post("/registration", regestrationController.regestration);
router.post("/login", regestrationController.login);
router.post("/logout", regestrationController.logout);
router.get("/refresh", regestrationController.refresh);
router.patch("/updateAvatar", authMiddleware, userController.updateAvatar);
router.patch("/updateInfo", authMiddleware, userController.updateInfo);

module.exports = router;
