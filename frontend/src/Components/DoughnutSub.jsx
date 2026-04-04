import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
import { randomGenerateColor, calculateAttendancePercent } from "../helper.js";

export default function DoughnutSub({studentData}) {
  const subjects = studentData?.subjects || [];
  
  const data = {
    datasets: [
      {
        label: "%",
        data: subjects.map(s => calculateAttendancePercent(s.totalClasses, s.attendedClasses)),
        backgroundColor: randomGenerateColor(subjects.length),
        borderWidth: 2,
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
          <strong>88%</strong> Present
        </p>
        <br />
        <p>
          <CancelRoundedIcon style={{ color: "red" }} /> <strong>12%</strong>{" "}
          Absent
        </p>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
}
