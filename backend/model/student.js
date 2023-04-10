const db = require("../util/database");
class Student {
  constructor(userID, S_Fname, S_Lname, S_phone = "", S_school = "") {
    this.userID = userID;
    this.S_Fname = S_Fname;
    this.S_Lname = S_Lname;
    this.S_phone = S_phone;
    this.S_school = S_school;
  }
  async save() {
    await db.query(
      `INSERT INTO student (userID, S_Fname, S_Lname, S_phone, S_school) VALUES ('${this.userID}', '${this.S_Fname}', '${this.S_Lname}', '${this.S_phone}', '${this.S_school}')`
    );
  }
}
module.exports = Student;
