import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";
import ExpensesList from "./ExpensesList.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selctedYear) => {
    setFilteredYear(selctedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
