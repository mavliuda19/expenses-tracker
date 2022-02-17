import ChartBar from "./CharBar"
import './Chart.css'

const Chart = (props) =>{
  const dataPointsValues = props.dataPoints.map((data)=> data.value)       // props' тон келген массивди аралап ар бир датанын  value' сун алып массивке сактап коёбуз
  const totalMax = Math.max(...dataPointsValues)                           //  ошол value' лардын Math.max менен максимальныйын алыш учун деструктуризация кылып массивди берип коёбуз
 
  return (<div className="chart">
      {props.dataPoints.map((dataPoint)=>                                  //пропстон келген массивди аралап ар бир айды алабыз
      <ChartBar
      key={dataPoint.label}                                                // ключ катары label' ди беребиз, ар бир label  бизде уникальный
      value={dataPoint.value}                                              // value' су катары  ар бир айдын value' сун беребиз
      maxValue={totalMax}                                                  // maxValue катары totalMax максимальный value' сун беребиз
      label={dataPoint.label}
      />
      )}
  </div>
  )}
export default Chart