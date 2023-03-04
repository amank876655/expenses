import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
          <ExpensesChart expenses = {filteredExpenses}/>
          <ExpenseList items = {filteredExpenses}/>
      </Card>
    </div>
  );
};
export default Expenses;
