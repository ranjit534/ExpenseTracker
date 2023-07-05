import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");
  const FilterHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };
  let filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });
  const removeHandler = (id) => {
    props.onRemove(id);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={enteredYear} onFilter={FilterHandler} />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} onRemove={removeHandler} />
      </Card>
    </div>
  );
}

export default Expenses;
