import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    function filterChangeHandler(selectedYear) {
        console.log("Expenses,js");
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear}
                                onfilterChange={filterChangeHandler}
                />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id}
                                 title={expense.title}
                                 amount={expense.amount}
                                 date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;