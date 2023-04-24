const db = require("../util/database");

class Classes {
  constructor(C_ID, C_name, C_category, C_startDate, C_endDate, C_time) {
    this.C_ID = C_ID;
    this.C_name = C_name;
    this.C_category = C_category;
    this.C_startDate = C_startDate;
    this.C_endDate = C_endDate;
    this.C_time = C_time;
  }
}

module.exports = Classes;
