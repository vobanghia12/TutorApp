const db = require("../util/database");
const Account = require("../model/account");
const Teacher = require("../model/teacher");
const Student = require("../model/student");
const bscrypt = require("bcrypt");
//bcrypt is hahsing function
const authController = {
  //signup a user also save the user in database and save either the user is teacher or student
  signup: async (req, res) => {
    try {
      //salt number to prevent attack
      let { username, password, isTeacher, firstname, lastname } =
        await req.body;
      const salt = await bscrypt.genSalt(10);
      const hashedPassword = await bscrypt.hash(password, salt);

      //create new account
      let newAccount = new Account(username, hashedPassword, isTeacher);
      //save the account in database
      await newAccount.save();
      //save to student or teacher table
      if (req.body.isTeacher) {
        //create new teacher
        const newTeacher = new Teacher(username, firstname, lastname);
        await newTeacher.save();
      } else {
        //create new student
        const newStudent = new Student(username, firstname, lastname);
        await newStudent.save();
      }

      res.status(200).json({ message: "Account created successfully" });

      //Initialize the account in database
    } catch {
      res.status(500).send({ message: "Fail to create account" });
    }
  },

  //login a user
  login: async (req, res) => {
    try {
      const user = db.query(
        `SELECT * FROM user_account WHERE userID = '${req.body.username}'`
      );
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = authController;
