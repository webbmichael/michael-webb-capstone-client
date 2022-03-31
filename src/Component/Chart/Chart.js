import React from 'react'
import {useState,useEffect,useRef} from "react";
import {Bar,getDatasetAtEvent,getElementAtEvent} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);
// import { Chart } from 'react-chartjs-2';
// import { Chart as ChartJS, registerables } from 'chart.js';

export default function BarChart({chartData}) {
 
//   console.log(chartRef.current)
// console.log(useRef())
//   const onClick = (event) => {
//     console.log(event)
//     console.log(getElementAtEvent());
//   }

 const chartRef= useRef(null)

    console.log(chartData)
    const chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'top',
            labels: {
              font: {
                family: 'Titillium Web',
              },
            },
          },
          title: {
            display: false,
            font: {
              family: 'Titillium Web',
              size: 16,
            },
            text: 'kg of CO2 emitted by electricity usage of average home, per year',
          },
        },
      };
  return (
    
<div>
<Bar
    ref={chartRef}
    data={chartData}
    options= {chartOptions}
    onClick = {(event) =>{
      const element = getElementAtEvent(chartRef.current, event);
      console.log(element)

    }}
    // getDatasetAtEvent={dataset => console.log(dataset)}
/>
</div>
  )
}

