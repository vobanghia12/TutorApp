const Student = require("../model/student");
const db = require("../util/database");
const studentController = {
  //View all classes
  viewclass: async (req, res) => {
    try {
      const query = `SELECT C_ID, C_time, C_name, C_startDate, C_endDate, C_category FROM class, studentclass WHERE class.C_ID = studentclass.classID AND studentclass.studentID = '${req.params.id}'`;
      // res[0] contains the data
      const res = await db.query(query);
    } catch (err) {
      res.status(500).json({ message: "Fail to view class" });
    }
  },

  //Register a class
  registerclass: async (req, res) => {
    try {
      let { C_ID, studentID } = await req.body;
      const query = `INSERT INTO studentclass (classID, studentID) VALUES ('${C_ID}', '${studentID}')`;
      await db.query(query);
      res.status(200).json({ message: "Class registered successfully" });
    } catch (err) {
      res.status(500).json({ message: "Fail to register class" });
    }
  },

  //Search for a class with subject
  searchclass: async (req, res) => {
    try {
      let { C_subject } = await req.body;
      const query = `SELECT C_ID, C_time, C_name, C_startDate, C_endDate, C_category FROM class WHERE C_subject = '${C_subject}'`;
      // res[0] contains the data
      const res = await db.query(query);
    } catch (err) {
      res.status(500).json({ message: "Fail to search class" });
    }
  },

  //Search for a class with class name
  searchNameClass: async (req, res) => {
    try {
      let { C_name } = await req.body;
      const query = `SELECT C_ID, C_time, C_name, C_startDate, C_endDate, C_category FROM class WHERE C_name = '${C_name}'`;
      // res[0] contains the data
      const res = await db.query(query);
    } catch (err) {}
  },

  //Search for a class with class code
  searchCodeClass: async (req, res) => {
    try {
      let { C_code } = await req.body;
      const query = `SELECT C_ID, C_time, C_name, C_startDate, C_endDate, C_category FROM class WHERE C_code = '${C_code}'`;
      // res[0] contains the data
      const res = await db.query(query);
    } catch (err) {}
  },

  //View all classes that a student is taking (today is between start date and end date)
  activeclass: async (req, res) => {
    try {
      const date = new Date();
      const query = `SELECT C_ID, C_time, C_name, C_startDate, C_endDate, C_category FROM class, studentclass WHERE class.C_ID = studentclass.classID AND studentclass.studentID = '${req.params.id}' AND '${date}' BETWEEN C_startDate AND C_endDate`;
      // res[0] contains the data
      const res = await db.query(query);
    } catch (err) {}
  },
};
module.exports = studentController;
