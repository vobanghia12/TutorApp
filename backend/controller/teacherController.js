const Classes = require("../model/classes");
const db = require("../util/database");

const teacherController = {
  //Request to create a class
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
  //post request
  addClass: async (req, res) => {
    try {
      let { C_code, C_name, C_category, C_startDate, C_endDate, C_time, T_ID } =
        await req.body;
      //need to get teacher id to crerate teaches table
      let classes = new Classes(
        C_code,
        C_name,
        C_category,
        C_startDate,
        C_endDate,
        C_time
      );
      //convert to date from string
      await classes.save();
      const result = await db.query(
        `SELECT C_ID FROM classes WHERE C_code = '${classes.C_code}'`
      );
      console.log(result[0][0].C_ID);
      console.log(T_ID);
      await db.query(
        `INSERT INTO teaches(classID, teacherID) VALUES ('${result[0][0].C_ID}', '${T_ID}')`
      );
      res.status(200).json({ message: "Class added successfully" });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  //View all students in a class

  //View all classes that a teacher is teaching

  //View all classes that a teacher is teaching in a specific subject

  //View all subjects that a teacher is teaching
};

module.exports = teacherController;
