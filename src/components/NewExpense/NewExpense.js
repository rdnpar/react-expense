import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  let selectAddExpense = <button onClick={startEditingHandler}>Add New Expense</button>

  if (isEditing === true) {
    selectAddExpense = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
  }

  return (
    <div className="new-expense">
      {selectAddExpense}
    </div>
  );
};

export default NewExpense;
