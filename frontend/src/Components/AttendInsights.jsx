import { Routes, Route, Navigate } from "react-router-dom";
import AttendInsightsNav from "./AttendInsightsNav.jsx";
import OverallAttend from './OverallAttend.jsx';
import Subjects from './Subjects.jsx';
import {AttendData} from '../../Data/Attend.js';
import { useEffect, useState } from "react";

export default function AttendInsights() {
  
  const [studentData, setStudentData] = useState([]);

  useEffect(()=>{
    setStudentData(AttendData.student);
  },[studentData]);
  
  return (
    <div className=" attend-insights">
      <div>
          <h1>AttendInsights</h1>
          <AttendInsightsNav />
      </div>
      <div className="nav-content">
        <Routes>
          <Route path="/" element={<Navigate to="overall" />} />
          <Route path='overall' element={<OverallAttend studentData={studentData} />} />
          <Route path='subjects' element={<Subjects studentData={studentData} />} />
        </Routes>
      </div>
    </div>
  )
}
