const authController = require("../controllers/auth.controller");

const router = require("express").Router();

require("express-group-routes");

router.group("/auth", (route) => {
  route.post("/login", authController.login);
  route.post('/verify', authController.verify);
});

module.exports = router;