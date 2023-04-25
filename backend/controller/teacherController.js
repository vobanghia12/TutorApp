const Teacher = require("../model/teacher");
const Teaches = require("../model/teaches");

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
  addClass: async (req, res) => {
    try {
      //need to get teacher id to crerate teaches table
      let { C_code, C_name, C_category, C_endDate, C_time, T_ID } =
        await req.body;
      const query2 = `SELECT C_ID FROM classes WHERE C_code = '${C_code}'`;
      const query = `INSERT INTO teaches(classID, teacherID) VALUES ('${C_ID}', '${T_ID}')`;
      const query1 = `INSERT INTO classes (C_name, C_category, C_startDate, C_endDate, C_time, T_ID) VALUES ('${C_ID}','${C_name}', '${C_category}', '${C_startDate}', '${C_endDate}', '${C_time}', '${T_ID}')`;
      await db.query(query);
      await db.query(query1);
      res.status(200).json({ message: "Class added successfully" });
    } catch (err) {
      res.status(500).json({ message: "Fail to add class" });
    }
  },

  //View all students in a class

  //View all classes that a teacher is teaching

  //View all classes that a teacher is teaching in a specific subject

  //View all subjects that a teacher is teaching
};
