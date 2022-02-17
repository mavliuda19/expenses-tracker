import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
const ExpensesList = (props)=>{

let expensesContent = <h2 className='expenses-list__fallback'>No Expenses Found</h2> //переменный ачып, "No expenses found" деген текст жазып коёбуз

if(props.expenses.length > 0 ){                                                      // эгерде массивдин узундугу 0' дон чон болсо  анда expenseContent' ке filter болгон массивди берип коёбуз
    expensesContent = props.expenses.map((expense)=>(                   
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
    ))
}

if(props.expenseYear ===  "All" ){                                               // эгерде filteredYear т.е тандалган жыл "All" го барабар болсо, анда пропстон келген бардык expense'терди чыгарып берсин
    expensesContent = props.allExpense.map((expense)=>{
        return(
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
    )})
}

return (
<ul className='expenses-list'>
    {expensesContent}                                                               {/* эми expensesContent' ти бул жерден чакырып коёбуз рендер болуш учун */}
</ul>
)
}
export default ExpensesList