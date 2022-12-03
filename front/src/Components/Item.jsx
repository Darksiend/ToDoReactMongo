import React from "react";
import "./Item.css";
const Item = (props) => {
  const { item } = props;

  const date =
    item.createdAt.split("T")[0].replace(/-/g, ".") +
    " " +
    item.createdAt
      .split("T")[1]
      .split(".")[0]
      .split(":")
      .slice(0, -1)
      .join(":");

  return (
    <div className="item">
      <h3 className="itemName">{item.todoName}</h3>
      <p className="itemDescription">{item.todoDescription}</p>
      <div className="date">{date}</div>
    </div>
  );
};

export default Item;
