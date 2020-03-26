import COLORS from '../../styles/colors'

export function chart(daylyData, setChartData) {
	setChartData({
		labels: daylyData.map((e) => e.date),
		datasets: [
			{
				label: 'Confirmed',
				data: daylyData.map((e) => e.confirmed),
				borderColor: COLORS.red 
			},
			{
				label: 'Recovered',
				data: daylyData.map((e) => e.recovered),
				borderColor: COLORS.green
			},
			{
				label: 'Deaths',
				data: daylyData.map((e) => e.deaths),
				borderColor: COLORS.gray.middle
			}
		]
	})
}
