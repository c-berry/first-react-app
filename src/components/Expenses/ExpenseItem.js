import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {

    //hooks can only be called within component functions,
    //not inside nested functions.
    //first arr element is current state, second is updated state.
    // const [title, setTitle] = useState(props.title);

    // function clickHandler() {
    //     setTitle("Updated!");
    //     console.log("ExpenseItem evaluated by React.")
    // }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>

            </Card>
        </li>
    );
}

// This button would go in space between closing div and closing Card if used:
// <button onClick={clickHandler}>Change Title</button>

export default ExpenseItem;