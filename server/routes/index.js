const express = require("express");
const Router = require("express").Router;
const regestrationController = require("../controllers/regestragion-controller");
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const servicesController = require("../controllers/services-controller");
const catalogController = require("../controllers/catalog-controller");

const router = new Router();

// users routes
router.post("/registration", regestrationController.regestration);
router.post("/login", regestrationController.login);
router.post("/logout", regestrationController.logout);
router.get("/refresh", regestrationController.refresh);
router.patch("/updateAvatar", authMiddleware, userController.updateAvatar);
router.patch("/updateInfo", authMiddleware, userController.updateInfo);

// services routes
router.get("/userServices", authMiddleware, servicesController.getUserServices);
router.post("/createService", authMiddleware, servicesController.addService);
router.delete(
  "/deleteService/:serviceId",
  authMiddleware,
  servicesController.deleteService
);
router.patch(
  "/updateService/:serviceId",
  authMiddleware,
  servicesController.updateService
);

// catalog routes
router.get("/catalog", authMiddleware, catalogController.getServices);

module.exports = router;
