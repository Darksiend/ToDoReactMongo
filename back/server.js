const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Todo = require("./models/todo");
import * as ToDoController from "./Controllers/ToDoController.js";
mongoose
  .connect(
    "mongodb+srv://darksiend:123@mycluster.eswzs4i.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Ok!");
  })
  .catch((e) => console.log("DB Error", e));
app.use(cors());
app.use(morgan("dev"));
const urlencodedParser = express.urlencoded({ extended: true });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.route("/create").post("/create");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
