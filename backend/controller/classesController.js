const classes = require("../models/classes");
const db = require("../util/database");

const classesController = {
  //GET ALL CLASSES
  getClassesForCurrentTeacher: async (req, res) => {
    try {
      const query = `SELECT * FROM classes, teaches WHERE classes.C_ID = teaches.classID AND teaches.teacherID = '${req.params.id}'`;
      const result = await db.query(query);
      console.log(result[0]);
      res.status(200).json(result[0]);
    } catch (err) {
      res.status(500).json({ message: "Fail to get classes" });
    }
  },

  //Add a new class
  addClass: async (req, res) => {
    try {
      let { C_ID, C_name, C_category, C_startDate, C_endDate, C_time, T_ID } =
        await req.body;
      const query = `INSERT INTO teaches(classID, teacherID) VALUES ('${C_ID}', '${T_ID}')`;
      const query1 = `INSERT INTO class (C_name, C_category, C_startDate, C_endDate, C_time, T_ID) VALUES ('${C_ID}','${C_name}', '${C_category}', '${C_startDate}', '${C_endDate}', '${C_time}', '${T_ID}')`;
      await db.query(query);
      await db.query(query1);
      res.status(200).json({ message: "Class added successfully" });
    } catch (err) {
      res.status(500).json({ message: "Fail to add class" });
    }
  },
};

module.exports = classesController;
