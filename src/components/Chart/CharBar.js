import './ChartBar.css'

const ChartBar = (props) => {
	let barFillHeight = '0%'                                                      // бир переменный ачып "0%" деп значение берип алабыз
	if (props.maxValue > 0) {                                                     //простон келген maxvalue 0'дон чон болсо
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'    //barFillHeight ' ке Math.round кылып алган процентти берип коёбуз
	}
	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div
					className='chart-bar__fill'
					style={{ height: barFillHeight }}                              // стиль беребиз жана height' тине barFillHeight беребизбал процентке жараша озгоруп турат
				></div>
			</div>
			<div className='chart-bar__label'>{props.label}</div>                 {/*  props аркылуу келген label' дарды беребизб айдын аттары чыгыш учун */}
		</div>
	)
}
export default ChartBar
