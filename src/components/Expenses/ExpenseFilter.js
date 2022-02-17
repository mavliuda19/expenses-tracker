import './ExpenseFilter.css'

const ExpensesFilter = (props)=>{
  const selectChangeHandler = (event)=>{                                         //тандалган жылдын value 'сун чыгарып берет
      props.onChangeFilter(event.target.value) 
  }
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'                                                                                                           >
                <label>Filter by year</label>
                <select value={props.selected} onChange={selectChangeHandler}>   {/* пропстон келген selected'ди алабыз */}
                    <option value="2025">2025</option>                           {/*option' дарга value атрибут беребиз кандай value алыш керектигин билиш учун*/}
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="All">Select All</option>                       
                </select>
            </div>
        </div>
    )

}
export default ExpensesFilter