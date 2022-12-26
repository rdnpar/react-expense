import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {

  return (
    <Card className='expenses'>
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
  );
}

export default Expenses;
