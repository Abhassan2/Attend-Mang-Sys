import AttendHeader from "../src/Components/AttendHeader.jsx";
import AttendInsights from "../src/Components/AttendInsights.jsx";
import AttendanceOverview from "../src/Components/AttendanceOverview.jsx";

export default function Attendance() {
  return (
    <div className="container">
      {/* <AttendHeader /> */}
      <AttendanceOverview overview={{msg: "hello", totalPercent: 82}} />
      <AttendInsights />
    </div>
  )
}
