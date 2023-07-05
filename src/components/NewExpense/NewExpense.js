import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [onAdd, setOnAdd] = useState(false);
  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setOnAdd(false);
  };
  const clickHandler = () => {
    setOnAdd(true);
  };
  const contentHandler = () => {
    setOnAdd(false);
  };
  let content = <button onClick={clickHandler}>Add New Expense</button>;
  if (onAdd) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onButton={contentHandler}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
