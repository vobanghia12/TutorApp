const db = require("../util/database");

class StudentClass {
  constructor(studentID, classID) {
    this.studentID = studentID;
    this.classID = classID;
  }
  async save() {
    await db.query(
      `INSERT INTO studentclass (studentID, classID) VALUES ('${this.studentID}', '${this.classID}')`
    );
  }
}

module.exports = StudentClass;
