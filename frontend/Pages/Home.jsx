import Navbar from "../src/Components/Navbar";
import Sidebar from "../src/Components/Sidebar";
import AttendanceOverview from '../src/Components/AttendanceOverview.jsx';

export default function Home() {
  return (
    <div className="container">
      <AttendanceOverview overview={{msg: "Attendance Overview", totalPercent: 82}} />
    </div>
  )
}
