const db = require("../util/database");
class Teacher {
  constructor(
    userID,
    T_Fname,
    T_Lname,
    T_number = "",
    T_institution = "",
    T_bio = ""
  ) {
    this.userID = userID;
    this.T_Fname = T_Fname;
    this.T_Lname = T_Lname;
    this.T_number = T_number;
    this.T_institution = T_institution;
    this.T_bio = T_bio;
  }
  async save() {
    console.log(
      this.userID,
      this.T_Fname,
      this.T_Lname,
      this.T_number,
      this.T_institution,
      this.T_bio
    );
    await db.query(
      `INSERT INTO teachers (userID, T_Fname, T_Lname, T_number, T_institution, T_bio) VALUES ('${this.userID}', '${this.T_Fname}', '${this.T_Lname}', '${this.T_number}', '${this.T_institution}', '${this.T_bio}')`
    );
  }
}
module.exports = Teacher;
