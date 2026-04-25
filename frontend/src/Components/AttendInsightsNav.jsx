import { NavLink } from "react-router-dom";

export default function AttendInsightsNav({setAttendNav }) {

  return (
    <div className="attend-insights-nav">
      <NavLink to="overall" className="active-text" onClick={(e)=> setAttendNav(e.target.innertext)}>
        Overall
      </NavLink>
      <NavLink to="subjects" className="active-text" onClick={(e)=> setAttendNav(e.target.innertext)}>
        Subjects
      </NavLink>
    </div>
  );
}
