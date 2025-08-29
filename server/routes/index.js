const Router = require("express").Router;
const regestrationController = require("../controllers/regestragion-controller");

const router = new Router();

router.post("/registration", regestrationController.regestration);
router.post("/login", regestrationController.login);
router.post("/logout", regestrationController.logout);
router.get("/refresh", regestrationController.refresh);

module.exports = router;
