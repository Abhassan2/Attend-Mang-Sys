import '../src/Style/Attendance.css';
import AttendanceOverview from "../src/Components/AttendanceOverview.jsx";
import AttendInsightsNav from "../src/Components/AttendInsightsNav.jsx";
import { AttendData } from "../Data/Attend.js";
import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AttendEaseContext } from '../src/Context/AttendEaseContext.jsx';
import { calculateOverallPercent } from '../src/helper.js';

export default function Attendance() {
  const {object} = useContext(AttendEaseContext);
  const [attendNav, setAttendNav] = useState("");
  
  return (
    <div className="container">
      {/* <AttendHeader /> */}
      <AttendanceOverview overview={{msg: "Attendance Overview", totalPercent: calculateOverallPercent(object.attendance)}} />
      <div className="attend-insights subContainer">
        <div>
            <h1>AttendInsights</h1>
            <AttendInsightsNav setAttendNav={setAttendNav} />
        </div>
        <div className="nav-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
