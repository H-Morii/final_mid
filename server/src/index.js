const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const knex = require("../db/knex.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// todos routes

//test
app.get("/", (req, res) => {
  res.send("What's up brooo ?!⚡️");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server running 🏃👨‍💻");
});
