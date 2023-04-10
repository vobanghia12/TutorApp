const db = require("../util/database");
class Account {
  constructor(userID, password, isTeacher) {
    this.userID = userID;
    this.password = password;
    this.isTeacher = isTeacher;
  }
  async save() {
    const query = `INSERT INTO user_account (userID, password, isTeacher) VALUES ('${this.userID}', '${this.password}', '${this.isTeacher}')`;
    await db.query(query);
  }
}
module.exports = Account;
