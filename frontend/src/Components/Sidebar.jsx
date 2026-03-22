import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AttendEaseContext } from "../Context/AttendEaseContext";

export default function Sidebar() {
  const { object } = useContext(AttendEaseContext);

  return (
    <>
      {object.openSidebar && (
        <div className="sidebar">
          <ul>
            <NavLink to="/home" className="primary-text" onClick={()=> object.setOpenSidebar(false)}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/attendance" className="primary-text" onClick={()=> object.setOpenSidebar(false)}>
              <li>Attendance</li>
            </NavLink>
            <NavLink to="/time-table" className="primary-text" onClick={()=> object.setOpenSidebar(false)}>
              <li>Time-Table</li>
            </NavLink>
            <NavLink to="/courses" className="primary-text" onClick={()=> object.setOpenSidebar(false)}>
              <li>Courses</li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}
