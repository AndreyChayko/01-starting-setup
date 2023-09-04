import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [expenseData, updateExpense] = useState(props);
  const { date, title, amount } = expenseData;
  const clickHandler = () => {
    const title = "My new title";
    const amount = 10000;
    const date = new Date();
    updateExpense({ title, amount, date });
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
