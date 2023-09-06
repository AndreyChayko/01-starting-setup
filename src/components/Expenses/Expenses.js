import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filterValue, setFilterValue] = useState(2022);
  const filterValueChange = (newFilterValue) => {
    setFilterValue(newFilterValue);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterValueChange} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
