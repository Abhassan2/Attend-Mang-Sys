import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import ChartDataLabels from "chartjs-plugin-datalabels";
import DoughnutSub from "./DoughnutSub.jsx";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function App({ studentData }) {
  const data = {
    datasets: [
      {
        label: "%",
        data: [
          Math.round(
            (studentData.totalAttendedClasses / studentData.totalClasses) * 100,
          ),
          Math.round(
            100 -
              (studentData.totalAttendedClasses / studentData.totalClasses) *
                100,
          ),
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        color: "#000",
        font: {
          size: 14,
        },
      },
      legend: {
        position: "top",
        labels: {
          color: "#000",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  };

  return (
    <div className="doughnut-container">
      <div>
        <Doughnut data={data} options={options} />
        <div>
          <p>
            <CheckCircleRoundedIcon style={{ color: "green" }} />
            <strong>88%</strong> Present
          </p>
          <br />
          <p>
            <CancelRoundedIcon style={{ color: "red" }} /> 
            <strong>12%</strong> Absent
          </p>
        </div>
      </div>
      <div className="doughnutSub">
        <DoughnutSub studentData={studentData} />
      </div>
    </div>
  );
}
