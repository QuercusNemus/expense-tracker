import ExpenseItem from "./ExpenseItem"
import React from "react"
import "./ExpensesList.css"

function ExpensesList(props) {
    if (props.items.filteredItems.length === 0) {
        return <h2 className={"expenses-list__fallback"}>Found no expenses.</h2>
    }

    return (
        <ul className={"expenses-list"}>
            {props.items.filteredItems.map((item) => (
                <ExpenseItem
                    key={item.id}
                    date={item.date}
                    title={item.title}
                    amount={item.amount}
                />
            ))}
        </ul>
    )
}

export default ExpensesList