import React from 'react'
import './Expenses.css'
import Card from '../ui/Card'
import { useState } from 'react/cjs/react.development'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022')             // состояния тузобуз  по умолчанию 2022 болсун деп

	const filterChangeHandler = (selectedYear) => {                     //lifting up кылабыз expensesFilter ден тандалса Expenses'те пайда болуп калыш керек
		setFilteredYear(selectedYear)                                   //setFilteredYear' ге selectedYear берип коёбуз
	}

	const filteredExpenses = props.items.filter((expense) => {          // пропстон келген items'терды filter кылып массив тузобуз
		return expense.date.getFullYear().toString() === filteredYear   // датанын жылын стринг кылып filteredYear'ге барабарбы текшеребиз
	})

	return (
		<>
			<Card className='expense'>
				<ExpensesFilter
				    selected={filteredYear}                              /* Expenses'тин  filteredYear деген состояниясын ExpenseFilter' ге   пропс катары берип коёбуз*/
					onChangeFilter={filterChangeHandler}                 /* filterChangeHandler' ди иштетиш учун ExpensesFilter' ге пропс беребиз */
				/>
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpensesList expenses={filteredExpenses} expenseYear={filteredYear} allExpense={props.items}/>
			</Card>
		</>
	)
}

export default Expenses
