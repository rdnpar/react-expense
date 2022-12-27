import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(filteredYear);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem
          title={props.exp[0].title}
          amount={props.exp[0].amount}
          date={props.exp[0].date}
        />
        <ExpenseItem
          title={props.exp[1].title}
          amount={props.exp[1].amount}
          date={props.exp[1].date}
        />
        <ExpenseItem
          title={props.exp[2].title}
          amount={props.exp[2].amount}
          date={props.exp[2].date}
        />
        <ExpenseItem
          title={props.exp[3].title}
          amount={props.exp[3].amount}
          date={props.exp[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
