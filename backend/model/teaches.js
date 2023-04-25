const db = require("../util/database");

class Teaches{
    constructor(classID, teacherID){
        this.classID = classID;
        this.teacherID = teacherID;
    }
    async save(){
        await db.query(`INSERT INTO teaches (classID, teacherID) VALUES ('${this.classID}', '${this.teacherID}')`);
    }
}

module.exports = Teaches;
