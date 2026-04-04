import '../src/Style/Home.css';
import Navbar from "../src/Components/Navbar";
import Sidebar from "../src/Components/Sidebar";
import AttendanceOverview from '../src/Components/AttendanceOverview.jsx';
import CoursesOverviewUi from "../src/Ui/CoursesOverviewUi.jsx";
import CalculatorUi from "../src/Ui/CalculatorUi.jsx";
import MyCourses from "../src/Components/MyCourses.jsx";

export default function Home() {
  return (
    <div className="container">
      <header className="home-header">
        <CoursesOverviewUi />
        <CalculatorUi />
      </header>
      <main className="home-main">
        <AttendanceOverview overview={{msg: "Attendance Overview", totalPercent: 82}} />
        <div>
          <MyCourses />
        </div>
      </main>
    </div>
  )
}
