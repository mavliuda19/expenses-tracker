import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [show,setShow]=useState(false)
    const [title, setTitle]=useState('');        
    const [date, setDate]=useState('');
    const [amount, setAmount]=useState('');
    
    const inputChangeHandler = (event)=>{
        const currentInput = event.target.name;   
        if(currentInput === 'title'){            
            setTitle(event.target.value)
        }else if(currentInput === 'amount'){     
            setAmount(event.target.value)
        }else if(currentInput === 'date'){      
            setDate(event.target.value)
        }
    }
    
    const submitHandler = (event)=>{
        event.preventDefault()
        const currentData={                      
            title,
            amount,
            date: new Date(date),                  
        }
        props.onSaveExpenseData(currentData)        
    }

    let showExpense;

    if(show){
    showExpense=<>
   <div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input name='title' type='text' onChange={inputChangeHandler} value={title}/>                       
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input name='amount' type='number' min="0" step="1" onChange={inputChangeHandler} value={amount}/> 
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input name='date' type='date' min="2022-01-01" onChange={inputChangeHandler} value={date}/>       
				</div>
			</div>
            <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
            <button type="submit" onClick={()=>setShow(false)}>Cancel</button>
            </div>
    </>
    }else{
        showExpense=<button onClick={()=>setShow(true)}>Add New Expense</button>
    }
	return (
        <form onSubmit={submitHandler}>
			{showExpense}
		</form>
	)
}
export default ExpenseForm
