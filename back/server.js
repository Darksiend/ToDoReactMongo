import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();
const port = 3001;
// const Todo = require("./models/todo");
import * as ToDoController from "./controllers/ToDoController.js";
import { createToDoValidation } from "./validations/validations.js";
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
app.use(express.json());
const urlencodedParser = express.urlencoded({ extended: true });

app.get("/", ToDoController.getAll);

app.post("/create", createToDoValidation, ToDoController.create);

app.delete("/delte");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
