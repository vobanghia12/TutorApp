const db = require("../util/database");
class Student {
  constructor(userID, S_Fname, S_Lname, S_number = "", S_school = "") {
    this.userID = userID;
    this.S_Fname = S_Fname;
    this.S_Lname = S_Lname;
    this.S_number = S_number;
    this.S_school = S_school;
  }
  async save() {
    await db.query(
      `INSERT INTO students (userID, S_Fname, S_Lname, S_number, S_school) VALUES ('${this.userID}', '${this.S_Fname}', '${this.S_Lname}', '${this.S_number}', '${this.S_school}')`
    );
  }
}
module.exports = Student;
