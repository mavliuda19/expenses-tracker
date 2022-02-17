import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props)=>{
    const saveExpenseDataHandler =(expenseData)=>{   /* ExpenseForm топтогон данныйларды lifting up кылып берип койдук,  */
    const dataWithId = {                             /* ExpenseForm до onSaveExpenseData'ны иштеткенибизде бул функция иштеп object тузулот*/
        ...expenseData,                              //ExpenseForm дoн келген данныйларды сактайбыз
        id: Math.random().toString()                 // уникальный болуш учун id беребиз
    }
    props.onAddExpense(dataWithId)                   //props'тон келген onAddExpense функциясын чакырат
    }
    return(
        <div className='new-expense'>
         <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> {/*пропс беребиз expenseform */}
        </div>
    )
}
export default NewExpenses 