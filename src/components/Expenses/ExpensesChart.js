import Chart from '../Chart/Chart';
const ExpensesChart = (props)=>{
    const chartDataPoints =[
       {label: "Jan", value: 0},         //массив тузуп 12 объект тузобуз 12 айга
       {label: "Feb", value: 0},
       {label: "Mar", value: 0},
       {label: "Apr", value: 0},
       {label: "May", value: 0},
       {label: "Jun", value: 0},
       {label: "Jul", value: 0},
       {label: "Aug", value: 0},
       {label: "Sep", value: 0},
       {label: "Oct", value: 0},
       {label: "Nov", value: 0},
       {label: "Dec", value: 0},
    ]; 
    for (const expense of props.expenses) {                        //пропс аркылуу expenses' терди алып итерация кылып, айларын алып алабыз мисалы: Март, Май etc
        const expenseMonth = expense.date.getMonth()               // жана ошол айга жараша канча акча коротконубузду чыгырып берет
        chartDataPoints[expenseMonth].value += expense.amount      // айдын value' сун алып ага expense' тин акчасын кошуп коёбуз
        
    }  
    return(
    <Chart dataPoints={chartDataPoints}/>
    )
};
export default ExpensesChart;