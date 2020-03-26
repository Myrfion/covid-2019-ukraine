import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import InfoBlock from '../components/InfoBlock'
import Map from '../components/Map'
import { fetchInfo } from '../store/actions/info'
import { chart } from '../store/actions/chart'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Graph from '../components/Graph'

function getTotal(list, key) {
	return list.reduce((acc, cur) => acc + cur.info[key], 0)
}

function MainPage(props) {
	const { getData, virusData, loading } = props
	const daylyData = [
		{
			//TODO: Replace it with real data
			date: '24-03-2020',
			confirmed: 5,
			deaths: 1,
			recovered: 3
		},
		{
			date: '25-03-2020',
			confirmed: 7,
			deaths: 2,
			recovered: 2
		},
		{
			date: '26-03-2020',
			confirmed: 3,
			deaths: 0,
			recovered: 3
		},
		{
			date: '27-03-2020',
			confirmed: 7,
			deaths: 2,
			recovered: 1
		},
		{
			date: '28-03-2020',
			confirmed: 1,
			deaths: 4,
			recovered: 2
		}
	]
	const [ chartData, setChartData ] = useState({})
	
	useEffect(() => {
		getData()
		chart(daylyData, setChartData)
	}, [])

	const totalConfirmed = !loading ? getTotal(virusData, 'confirmed') : 0

	const totalDeaths = !loading ? getTotal(virusData, 'deaths') : 0

	const totalRecovered = !loading ? getTotal(virusData, 'recovered') : 0

	return (
		<div className="min-h-screen bg-black flex flex-col items-center px-4 ">
			<Header />
			<div className="w-full flex items-start flex-wrap lg:flex-no-wrap justify-between">
				<InfoBlock
					className="lg:ml-0 lg:mr-2 mt-4 cv-w-3/10 lg:cv-w-400px order-1"
					label="Підтверджено"
					value={totalConfirmed}
					valueColor="red"
					loading={loading}
					virusData={virusData}
					dataKey="confirmed"
				/>
				<Map loading={loading} data={virusData} className="w-full order-5 lg:order-2" />
				<div className="block cv-w-3/10 order-3">
					<div className="flex items-start flex-wrap lg:flex-no-wrap justify-between">
						<InfoBlock
							className="lg:mx-2 mt-4 cv-w-3/10 lg:cv-w-400px order-1"
							label="Смерті"
							value={totalDeaths}
							valueColor="white"
							loading={loading}
							virusData={virusData}
							dataKey="deaths"
						/>
						<InfoBlock
							className="lg:ml-2 lg:mr-0 mt-4 cv-w-3/10 lg:cv-w-400px order-2"
							label="Одужали"
							value={totalRecovered}
							valueColor="green"
							loading={loading}
							virusData={virusData}
							dataKey="recovered"
						/>
					</div>

					<Graph 
						className="lg:ml-2 lg:mr-0 mt-4 cv-w-3/10 lg:cv-w-400px order-3" 
						chartData={chartData} />
				</div>
			</div>
			<Footer />
		</div>
	)
}

function mapStateToProps(state) {
	return {
		virusData: state.info.data,
		loading: state.info.loading
	}
}

const mapDispatchToProps = {
	getData: fetchInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
