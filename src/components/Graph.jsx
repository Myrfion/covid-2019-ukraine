import React, {useState} from "react"
import {/* Bar,*/ Line} from "react-chartjs-2";
import { useEffect } from "react";
import COLORS from '../styles/colors'

function Graph(props) {

    const { daylyData } = props;

    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: daylyData.map( e => e.date),
            datasets: [
                {
                    label: "Confirmed",
                    data: daylyData.map( e => e.confirmed),
                    // backgroundColor: COLORS.red//change this and
                    borderColor: COLORS.red//this if use Bar
                },
                
                {
                    label: "Recovered",
                    data: daylyData.map( e => e.recovered),
                    // backgroundColor: COLORS.green
                    borderColor: COLORS.green

                },
                {
                    label: "Deaths",
                    data: daylyData.map( e => e.deaths),
                    // backgroundColor: COLORS.gray.middle,
                    borderColor: COLORS.gray.middle
                }
            ]
        });
    }

    useEffect(() => {
        chart();
    }, []);
    //change Line to Bar 
  return (
    <div className="bg-gray-darker p-4 mt-4 border-gray-middle border border-solid hidden lg:flex flex-col">
        <Line data={chartData}/>
    </div>
  )
}

export default Graph
