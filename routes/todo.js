const router = require("express").Router();
const Todo = require("../models/Todo");

//route
router
  .post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });

    // Save the Todo
    newTodo
      .save()
      .then(() => {
        console.log("Successfull added todo!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        // Handle the error appropriately, e.g., send an error response
        res.status(500).send("Internal Server Error");
      });
  });

module.exports = router;
