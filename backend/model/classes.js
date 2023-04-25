const db = require("../util/database");

class Classes {
  constructor(C_code, C_name, C_category, C_startDate, C_endDate, C_time) {
    this.C_code = C_code;
    this.C_name = C_name;
    this.C_category = C_category;
    this.C_startDate = C_startDate;
    this.C_endDate = C_endDate;
    this.C_time = C_time;
  }
  async save() {
    await db.query(
      `INSERT INTO classes (C_code, C_name, C_category, C_startDate, C_endDate, C_time) VALUES ('${this.C_code}', '${this.C_name}', '${this.C_category}', '${this.C_startDate}', '${this.C_endDate}', '${this.C_time}')`
    );
  }
}

module.exports = Classes;
