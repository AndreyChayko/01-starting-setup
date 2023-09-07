import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [yearFromFilter, setYearFromFilter] = useState("2019");
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === yearFromFilter,
  );
  const filterValueChange = (newFilterValue) => {
    setYearFromFilter(newFilterValue);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearFromFilter}
        onFilterChange={filterValueChange}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
