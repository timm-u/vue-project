const express = require("express");
const router = express.Router();
const { Todos } = require("./dbConnection");

//Get all todos
router.get("/get-todos", async function (request, response) {
  const result = await Todos.find();
  //console.log(result);
  response.send(result);
});

//Get one todo
router.get("/get-todo/:id", async function (request, response) {
  const result = await Todos.findOne({ _id: request.params.id });
  console.log(result);
  response.send(result);
});

//Delete one todo
router.post("/delete-todo/:id", async function (request, response) {
  const result = await Todos.deleteOne({ _id: request.params.id });
  console.log(result);
  response.send(result);
});

//Add a new todo
router.post("/add-todo", async function (request, response) {
  if (request.body.title) {
    await Todos.create(request.body);
    console.log("BE Add todo");
  }
  response.send("BE Add todo done");
});

module.exports = router;
