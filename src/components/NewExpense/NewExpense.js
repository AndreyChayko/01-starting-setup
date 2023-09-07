import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const addNewExpenseHandler = () => {
    setShowExpenseForm(true);
  };

  const hideNewExpenseForm = () => {
    setShowExpenseForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    hideNewExpenseForm();
  };

  let content = <button onClick={addNewExpenseHandler}>Add new expense</button>;

  if (showExpenseForm) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelClick={hideNewExpenseForm}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
