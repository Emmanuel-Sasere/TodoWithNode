const router = require("express").Router();
const Todo = require("../models/Todo");

//routes will be here

router.get("/", async (req, res) => {
  const allTodo = await Todo.find();

  // This for view the content in the res.send which is "welcome to our HomePage"
  // For it to work uncomment this and comment the res.render. both can't work consecutively
  //   res.send("Welcome to our Homepage!");

  // This for view the index.js page
  res.render("index", { todo: allTodo });
});

module.exports = router;
