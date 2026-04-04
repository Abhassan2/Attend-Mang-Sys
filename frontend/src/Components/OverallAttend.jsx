import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import ChartDataLabels from "chartjs-plugin-datalabels";
import DoughnutSub from "./DoughnutSub.jsx";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
import { randomGenerateColor, calculateAttendancePercent } from "../helper.js";

export default function App({ studentData }) {
  const data = {
    datasets: [
      {
        label: "%",
        data: [
          calculateAttendancePercent(studentData.totalClasses, studentData.totalAttendedClasses),
          100 - calculateAttendancePercent(studentData.totalClasses, studentData.totalAttendedClasses),
        ],
        backgroundColor: ["#F63049", "#6CA651"],
        borderWidth: 3,
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
