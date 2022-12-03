import React, { useEffect, useState } from "react";
import "./ItemList.css";
import Item from "./Item";
const ItemList = () => {
  const [todo, setTodo] = useState([]);
  const [nameToDo, setNameToDo] = useState("");
  const [descriptionToDo, setDescriptionToDo] = useState("");

  const onChangeHandler = (event) => {
    if (event.target.name == "todoName") {
      setNameToDo(event.target.value);
    } else if (event.target.name == "todoDescription") {
      setDescriptionToDo(event.target.value);
    }
  };
  const addTodo = () => {
    fetch("http://localhost:3001/create", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        todoName: nameToDo,
        todoDescription: descriptionToDo,
      }),
    })
      .then(function (res) {
        getAllToDo();
      })
      .catch(function (res) {
        console.log(res);
      });
  };

  const getAllToDo = () => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((res) => setTodo(res));
  };
  useEffect(() => {
    getAllToDo();
  }, []);

  function delteTodo(id) {
    fetch("http://localhost:3001/delete", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
    })
      .then(function (res) {
        getAllToDo();
      })
      .catch(function (res) {
        console.log(res);
      });
  }

  return (
    <div className="main">
      <div className="ItemList">
        <div className="logo">ToDos</div>
        <input
          onChange={onChangeHandler}
          className="input"
          name="todoName"
          type="text"
        />
        <input
          onChange={onChangeHandler}
          name="todoDescription"
          className="input"
          type="text"
        />
        <button onClick={addTodo} className="btn">
          Add ToDo!
        </button>
        {todo.map((item) => (
          <div onClick={delteTodo} className="itemListContainer" key={item._id}>
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
