import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { randomGenerateColor, calculateOverallPercent } from '../helper.js';
import { useContext } from 'react';
import { AttendEaseContext } from '../Context/AttendEaseContext.jsx';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  const {object} = useContext(AttendEaseContext);

  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    datalabels: {
      display: false
    }
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: 'san serif',
          size: 10,
          weight: 'normal',
          lineHeight: 1.2,
        },
        maxRotation: 60,  
        minRotation: 50,   
        color: '#000' 
      },
      grid: {
        display: false,
      },
      title: {
        display: false,
      },    
    },
    y: {
      ticks: {
        font: {
          family: 'san serif',
          size: 10,
          weight: 'normal',
          lineHeight: 1.2,
        },  
        color: '#000' 
      },
      grid: {
        display: false,
      },
      title: {
        display: false,
      }
    },
  }
  };

  const data = {
  labels: object.attendance.map(subject => subject.subjectId.subjectName.split(" ").map(elm => elm[0])),

  datasets: [
    {
      data: object.attendance.map(subject => Math.round(subject.percentage)),
      barThickness: 20,
      maxBarThickness: 20,
      minBarLength: 0,
      backgroundColor: randomGenerateColor(object.attendance.length),
    },
  ],
  
  };

  if (!object.attendance || object.attendance.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className='vBar-container'>
      <Bar options={options} data={data} />
    </div>
  );
}
