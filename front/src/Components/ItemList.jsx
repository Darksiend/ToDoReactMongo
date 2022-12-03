import React, { useEffect, useState } from "react";
import "./ItemList.css";
const ItemList = () => {
  const [todo, setTodo] = useState([]);

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
        {todo.map((item) => {
          return (
            <div>
              <div className="todoName">{item.todoName}</div>
              <div className="todoDescription">{item.todoDescription}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
