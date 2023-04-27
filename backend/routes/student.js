const router = require("express").Router();
const studentController = require("../controller/studentController.js");

router.post("/registerClass", studentController.registerclass);

router.get("/viewClasses/:id", studentController.viewclass);

router.post("/searchClass", studentController.searchCodeClass);

router.post("/searchCategories", studentController.searchCategories);

module.exports = router;
