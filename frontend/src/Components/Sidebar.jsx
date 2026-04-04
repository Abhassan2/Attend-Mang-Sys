import '../Style/Sidebar.css';
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AttendEaseContext } from "../Context/AttendEaseContext";

export default function Sidebar() {
  const { object } = useContext(AttendEaseContext);

  const handleActiveTab = (e)=>{
    object.setOpenSidebar(false);
    object.setActiveTab(e.target.firstChild.data)
  }
  // console.log(object.activeTab);
  return (
    <>
      {object.openSidebar && (
        <div className="sidebar">
          <ul>
            <NavLink to="/home" className="primary-text" onClick={(e)=> handleActiveTab(e)}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/attendance" className="primary-text" onClick={(e)=> handleActiveTab(e)}>
              <li>Attendance</li>
            </NavLink>
            <NavLink to="/time-table" className="primary-text" onClick={(e)=> handleActiveTab(e)}>
              <li>Time-Table</li>
            </NavLink>
            <NavLink to="/courses" className="primary-text" onClick={(e)=> handleActiveTab(e)}>
              <li>Courses</li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}
