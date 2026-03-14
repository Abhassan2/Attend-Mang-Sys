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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function App({studentData}) {

  const [subjectData, setSubjectData] = useState([]);

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
  labels: subjectData ? subjectData.map(sub => sub.sbjCode) : [],

  datasets: [
    {
      data: [1,2,3,40,5,60,7],
      barThickness: 20,
      maxBarThickness: 20,
      minBarLength: 0,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
  
  };

  useEffect(()=>{
    setSubjectData(studentData.subjects);
  },[studentData]);

  if (!subjectData || subjectData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className='vBar-container'>
      <Bar options={options} data={data} />
    </div>
  );
}
