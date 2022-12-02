import ToDoModel from "../models/todo.js";

export const getAll = async (req, res) => {
  try {
    const todos = await ToDoModel.find();
    res.json(todos);
  } catch (err) {
    console.log(e);
    res.status(500).json({ msg: "Unsuccessful Get All Todos" });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new ToDoModel({
      todoName: req.body.todoName,
      todoDescription: req.body.todoDescription,
    });
    const todo = await doc.save();
    res.json(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Cant create todo!" });
  }
};
