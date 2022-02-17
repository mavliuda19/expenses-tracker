import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
	const expenseTitle = props.title      //props'тон келген title менен amount'ту переменныйга сактап койдук, синтаксис женил болуу учун
	const expenseAmount = props.amount
	
	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date} />                                {/*ExpenseData'ны чакырып props аркылуу Expensedata' га даталарды беребиз*/}
			<h2 className='expense-item__description'>{expenseTitle}</h2>     {/* бул жерден title менен amount чакырабыз */}
			<div className='expense-item__price'>${expenseAmount}</div>
		</div>
	)
}

export default ExpenseItem;
