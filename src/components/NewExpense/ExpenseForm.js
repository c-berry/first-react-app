import React, {useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    // Create initial state for form inputs:
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    //
    // Can also be written like this:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // });

    // Functions to capture input value change on form:
    function titleChangeHandler(event) {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);

        // If using grouped method from above:
        // This may not work in niche cases...
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        //
        // ...So it should be written like this:
        // setUserInput(() => {
        //     return {...userInput, enteredTitle: event.target.value}
        // });
    }
    function amountChangeHandler(e) {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // });
    }
    function dateChangeHandler(e) {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // });
    }

    // Function to capture all form values when submitted:
    function submitHandler(e) {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // Pass submitted form data up to NewExpense.js
        props.onSaveExpenseData(expenseData);

        // Set default values after submission:
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        </form>
    );
}

export default ExpenseForm;