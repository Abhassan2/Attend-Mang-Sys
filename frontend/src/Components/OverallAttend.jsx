import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import ChartDataLabels from "chartjs-plugin-datalabels";
import DoughnutSub from "./DoughnutSub.jsx";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
import { randomGenerateColor, calculateOverallPercent } from "../helper.js";
import { useContext } from "react";
import { AttendEaseContext } from "../Context/AttendEaseContext.jsx";

export default function App() {
  const {object} = useContext(AttendEaseContext);
  
  const data = {
    datasets: [
      {
        label: "%",
        data: [
          calculateOverallPercent(object.attendance),
          100 - calculateOverallPercent(object.attendance),
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
            <strong>{calculateOverallPercent(object.attendance)}</strong> Present
          </p>
          <br />
          <p>
            <CancelRoundedIcon style={{ color: "red" }} /> 
            <strong>{100 - calculateOverallPercent(object.attendance)}</strong> Absent
          </p>
        </div>
      </div>
      <div className="doughnutSub">
        <DoughnutSub />
      </div>
    </div>
  );
}
