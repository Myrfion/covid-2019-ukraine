import React from 'react'
import { Line } from 'react-chartjs-2'

function Graph(props) {
	const { chartData } = props

	return (
		<div className="bg-gray-darker p-4 mt-4 border-gray-middle border border-solid hidden lg:flex flex-col">
			<Line data={chartData} />
		</div>
	)
}

export default Graph
