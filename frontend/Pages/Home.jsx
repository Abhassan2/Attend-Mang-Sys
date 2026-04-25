import '../src/Style/Home.css';
import Navbar from "../src/Components/Navbar";
import Sidebar from "../src/Components/Sidebar";
import AttendanceOverview from '../src/Components/AttendanceOverview.jsx';
import CoursesOverviewUi from "../src/Ui/CoursesOverviewUi.jsx";
import CalculatorUi from "../src/Ui/CalculatorUi.jsx";
import MyCourses from "../src/Components/MyCourses.jsx";
import { useContext } from 'react';
import { AttendEaseContext } from '../src/Context/AttendEaseContext.jsx';
import {calculateOverallPercent} from '../src/helper.js';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const {object} = useContext(AttendEaseContext);
  const location = useLocation();

  useEffect(()=>{
    object.getAttendance();
  }, [location.pathname]);
  
  return (
    <div className="container">
      <header className="home-header">
        <CoursesOverviewUi />
        <CalculatorUi />
      </header>
      <main className="home-main">
        <AttendanceOverview overview={{msg: "Attendance Overview", totalPercent: calculateOverallPercent(object.attendance)}} />
        <div>
        </div>
      </main>
    </div>
  )
}
