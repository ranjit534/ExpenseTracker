import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const removeHandler = () => {
    props.onRemove(props.id);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button className="expense-item__price" onClick={removeHandler}>
            Remove
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
