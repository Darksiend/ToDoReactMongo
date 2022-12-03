import React, { useEffect, useState } from "react";
import "./ItemList.css";
import Item from "./Item";
const ItemList = () => {
  const [todo, setTodo] = useState([]);
  const onChangeHandler = () => {};
  const addTodo = () => {
    fetch("http://localhost:3001", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ todoName: 1, todoDescription: 2 }),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((res) => setTodo(res));
  }, []);
  return (
    <div className="main">
      <div className="ItemList">
        <div className="logo">ToDos</div>
        <input className="input" type="text" />
        <input className="input" type="text" />
        <button className="btn">Add ToDo!</button>
        {todo.map((item) => (
          <div className="itemListContainer" key={item._id}>
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
