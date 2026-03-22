import './index.css'
import { Routes, Route, Navigate } from "react-router-dom";
import TimeTable from '../Pages/TimeTable.jsx';
import Attendance from '../Pages/Attendance.jsx';
import Courses from '../Pages/Courses.jsx';
import Home from '../Pages/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';

function App(){

  return(
    // <TimeTable/>
    // <Attendance />
    // <Courses />
    // <Home />
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/time-table' element={<TimeTable />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </>
  )
}

export default App;
