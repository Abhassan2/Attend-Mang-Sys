import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
import { randomGenerateColor, calculateOverallPercent } from "../helper.js";
import { useContext } from "react";
import { AttendEaseContext } from "../Context/AttendEaseContext.jsx";

export default function DoughnutSub() {
  const {object} = useContext(AttendEaseContext);
  
  const data = {
    datasets: [
      {
        label: "%",
        data: object.attendance.map(subject => Math.round(subject.percentage)),
        backgroundColor: randomGenerateColor(object.attendance.length),
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
    <div>
      <div>
        <p>
          <CheckCircleRoundedIcon style={{ color: "green" }} />{" "}
          <strong>{calculateOverallPercent(object.attendance)}</strong> Present
        </p>
        <br />
        <p>
          <CancelRoundedIcon style={{ color: "red" }} /> <strong>{100 - calculateOverallPercent(object.attendance)}</strong>{" "}
          Absent
        </p>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
}
