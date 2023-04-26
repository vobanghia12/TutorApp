const router = require("express").Router();
const teacherController = require("../controller/teacherController.js");

router.post("/addClass", teacherController.addClass);

router.get("/getClasses/:id", teacherController.getClassesForCurrentTeacher);
module.exports = router;
