const classesController = require("../controllers/classesController");

const router = require("express").Router();

//get classes taught by current teacher
router.get("/:id", classesController.getTeacherClasses);

//add a new class
router.post("/add", classesController.addClass);

module.exports = router;
