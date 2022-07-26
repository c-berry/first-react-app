import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>July 25th 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$295.84</div>
            </div>
        </div>
    );
}

export default ExpenseItem;