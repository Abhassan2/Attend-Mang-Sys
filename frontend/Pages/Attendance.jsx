import AttendInsights from "../src/Components/AttendInsights.jsx";
import AttendanceOverview from "../src/Components/AttendanceOverview.jsx";
import AttendInsightsNav from "../src/Components/AttendInsightsNav.jsx";
import { AttendData } from "../Data/Attend.js";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Attendance() {

  return (
    <div className="container">
      {/* <AttendHeader /> */}
      <AttendanceOverview overview={{msg: "Attendance Overview", totalPercent: 82}} />
      {/* <AttendInsights /> */}

      <div className="attend-insights subContainer">
        <div>
            <h1>AttendInsights</h1>
            <AttendInsightsNav />
        </div>
        <div className="nav-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
