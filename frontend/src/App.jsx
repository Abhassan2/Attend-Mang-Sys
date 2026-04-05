import './index.css'
import { Routes, Route, Navigate } from "react-router-dom";
import TimeTable from '../Pages/TimeTable.jsx';
import Attendance from '../Pages/Attendance.jsx';
import Courses from '../Pages/Courses.jsx';
import Home from '../Pages/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import OverallAttend from './Components/OverallAttend.jsx';
import Subjects from './Components/Subjects.jsx';
import { AttendData } from '../Data/Attend.js';
import { useEffect, useState } from "react";

function App(){
  const [studentData, setStudentData] = useState([]);
  
  useEffect(()=>{
    setStudentData(AttendData.student);
  },[studentData]);

  return(
    <div>
      <Navbar />
      <div className='dashboard'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/attendance' element={<Attendance />} >
            <Route index element={<Navigate to="overall" />} />
            <Route path='overall' element={<OverallAttend studentData={studentData} />} />
            <Route path='subjects' element={<Subjects studentData={studentData} />} />
          </Route>
          <Route path='/time-table' element={<TimeTable />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
