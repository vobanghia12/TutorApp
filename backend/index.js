const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const auth = require("./routes/auth");
const teacher = require("./routes/teacher");

const app = express();

//those services will be called every time we call the routes
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/v1/auth", auth);
//app.use("/v1/class", teacher);
app.use("/v1/teacher", teacher);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
