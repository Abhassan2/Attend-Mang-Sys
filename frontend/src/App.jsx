import './index.css'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import LoginRegister from './Components/LoginRegister.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const location = useLocation();
  const hideLayout = location.pathname === "/login";

  return(
    <div>
      {!hideLayout && <Navbar />}
      <div className='flex flex-row'>
        {!hideLayout && <Sidebar />}
        <div className='flex-1'>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path='/login' element={<LoginRegister />} />

            <Route path='/home' element={<Home/>} />
            <Route path='/attendance' element={<Attendance />} >
              <Route index element={<Navigate to="overall" />} />
              <Route path='overall' element={<OverallAttend />} />
              <Route path='subjects' element={<Subjects />} />
            </Route>

            <Route path='/lectures' element={<TimeTable />} />
            <Route path='/subjects' element={<Courses />} />
            
          </Routes>
          <ToastContainer 
            position="top-center" 
            autoClose={3000} 
          />
        </div>
      </div>
    </div>
  )
}

export default App;
