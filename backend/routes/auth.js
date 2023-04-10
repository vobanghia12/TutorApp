const router = require("express").Router();
const authController = require("../controller/authController.js");

router.post("/signup", authController.signup);

module.exports = router;
