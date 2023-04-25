const db = require("../util/database");
class Account {
  constructor(username, password, isTeacher) {
    this.username = username;
    this.password = password;
    this.isTeacher = isTeacher;
  }
  async save() {
    const query = `INSERT INTO accounts (username, password, isTeacher) VALUES ('${this.username}', '${this.password}', '${this.isTeacher}')`;
    await db.query(query);
  }
}
module.exports = Account;
