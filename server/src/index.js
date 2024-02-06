const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const knex = require("../db/knex.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//Get a todo
app.post("/final_table", async (request, response) => {
  try {
    const { description } = request.body;
    const newTodo = await knex("final_table").insert({
      description: description,
    });

    response.send(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/final_table/:id", async (request, response) => {
  try {
    const { id } = request.params; // This will be the id number.
    const todo = await knex("final_table").where("id", "=", id);
    console.log(todo);
    response.status(200).send(todo);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/final_table", async (request, response) => {
  try {
    const { id } = request.params; // This will be the id number.
    const todo = await knex("final_table").select("*");
    console.log(todo);
    response.status(200).send(todo);
  } catch (err) {
    console.error(err.message);
  }
});

//Update a todo

app.put("/final_table/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { description } = request.body;

    const updateTodo = await knex("final_table").where("id", "=", id).update({
      description: description,
    });

    response.json("Todo is now Updated sucker");
  } catch (err) {
    response.status(500).send({ err });
  }
});

//Delete a todo

app.delete("/final_table/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const todoDelete = await knex("final_table").where("id", "=", id).delete();

    response.json("Todo has been deleted");
  } catch (err) {
    console.log(err);
  }
});

// test;
app.get("/", (req, res) => {
  res.send("What's up brooo ?!⚡️");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server running 🏃👨‍💻");
});
