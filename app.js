const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Connect MongoDB
mongoose.connect("mongodb://localhost/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
//route for index
app.use(require("./routes/index"));

//route for todo
app.use(require("./routes/todo"));
//server configuration
app.listen(3000, () => console.log("Server is running on port 3000"));
