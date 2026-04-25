import "../Style/Sidebar.css";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AttendEaseContext } from "../Context/AttendEaseContext";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import ViewTimelineRoundedIcon from "@mui/icons-material/ViewTimelineRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";

export default function Sidebar() {
  const navigate = useNavigate();
  const { object } = useContext(AttendEaseContext);

  const handleActiveTab = (e) => {
    object.setOpenSidebar(false);
    object.setActiveTab(e.target.firstChild.data);
  
    if((e.target.nodeName === "LI") && (e.target.innerText === "Logout")){
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      object.setToken("");
      object.setId("");
      navigate("/login");
    }
    if((e.target.nodeName === "A") && (e.target.innerHTML.innerText === "Logout")){
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      object.setToken("");
      object.setId("");
      navigate("/login");
    }
  };

  return (
    <>
      {object.openSidebar && (
        <div className="sidebar h-full flex flex-col items-start">
          <ul>
            <NavLink
              to="/home"
              className="primary-text flex "
              onClick={(e) => handleActiveTab(e)}
            >
              <HomeRoundedIcon />
              <li className="mx-2">Home</li>
            </NavLink>
            <NavLink
              to="/attendance"
              className="primary-text flex"
              onClick={(e) => handleActiveTab(e)}
            >
              <LeaderboardRoundedIcon />
              <li className="mx-2">Attendance</li>
            </NavLink>
            <NavLink
              to="/lectures"
              className="primary-text flex"
              onClick={(e) => handleActiveTab(e)}
            >
              <ViewTimelineRoundedIcon />
              <li className="mx-2">Lectures</li>
            </NavLink>
            <NavLink
              to="/subjects"
              className="primary-text flex"
              onClick={(e) => handleActiveTab(e)}
            >
              <LocalLibraryRoundedIcon />
              <li className="mx-2">Courses</li>
            </NavLink>
            <NavLink 
              to="/login" 
              className="mt-34 self-end primary-text flex"
              onClick={(e) => handleActiveTab(e)}
            >
              <li className="mx-2">
              Logout
              </li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}
