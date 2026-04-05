import '../Style/Sidebar.css';
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AttendEaseContext } from "../Context/AttendEaseContext";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import ViewTimelineRoundedIcon from '@mui/icons-material/ViewTimelineRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';

export default function Sidebar() {
  const { object } = useContext(AttendEaseContext);

  const handleActiveTab = (e)=>{
    object.setOpenSidebar(false);
    object.setActiveTab(e.target.firstChild.data)
  }

  return (
    <>
      {object.openSidebar && (
        <div className="sidebar">
          <ul>
            <NavLink to="/home" className="primary-text flex " onClick={(e)=> handleActiveTab(e)}>
              <HomeRoundedIcon />
              <li className='mx-2'>Home</li>
            </NavLink>
            <NavLink to="/attendance" className="primary-text flex" onClick={(e)=> handleActiveTab(e)}>
              <LeaderboardRoundedIcon />
              <li className='mx-2'>Attendance</li>
            </NavLink>
            <NavLink to="/time-table" className="primary-text flex" onClick={(e)=> handleActiveTab(e)}>
              <ViewTimelineRoundedIcon />
              <li className='mx-2'>Time-Table</li>
            </NavLink>
            <NavLink to="/courses" className="primary-text flex" onClick={(e)=> handleActiveTab(e)}>
              <LocalLibraryRoundedIcon />
              <li className='mx-2'>Courses</li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}
