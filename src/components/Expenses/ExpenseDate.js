import './ExpenseDate.css'

function ExpenseDate(props) {
	const month = props.date.toLocaleString('en-Us', { month: 'long' })  //пропстон келген датанын айын алабыз
	const day = props.date.toLocaleString('en-Us', { day: '2-digit' })   //пропстон келген датанын кунун 2 цифрасын алабыз
	const year = props.date.getFullYear()                                //пропстон келген датанын жылын алабыз
	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{month}</div>            {/* бул жерден month,date,year чакырып коёбуз */}
			<div className='expense-date__year'>{day}</div>
			<div className='expense-date__day'>{year}</div>
		</div>
	)
}

export default ExpenseDate;