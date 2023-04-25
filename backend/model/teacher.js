const db = require("../util/database");
class Teacher {
  constructor(
    userID,
    T_Fname,
    T_Lname,
    T_phone = "",
    T_institution = "",
    T_bio = ""
  ) {
    this.userID = userID;
    this.T_Fname = T_Fname;
    this.T_Lname = T_Lname;
    this.T_phone = T_phone;
    this.T_institution = T_institution;
    this.T_bio = T_bio;
  }
  async save() {
    console.log("save teacher");
    await db.query(
      `INSERT INTO teacher (userID, T_Fname, T_Lname, T_phone, T_institution, T_bio) VALUES ('${this.userID}', '${this.T_Fname}', '${this.T_Lname}', '${this.T_phone}', '${this.T_institution}', '${this.T_bio}')`
    );
  }
}

module.exports = Teacher;
