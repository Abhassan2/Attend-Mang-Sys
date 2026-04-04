import { NavLink } from "react-router-dom";

export default function AttendInsightsNav({ selectedNav, setSelectedNav }) {

  return (
    <div className="attend-insights-nav">
      <NavLink to="overall" className="active-text">
        Overall
      </NavLink>
      <NavLink to="subjects" className="active-text">
        Subjects
      </NavLink>
      {/* <nav
        className={`secondary-text ${selectedNav === "Overall" ? "activeNav" : ""}`}
        onClick={(e) => setSelectedNav(e.target.innerText)}
      >
        Overall
      </nav>
      <nav
        className={`secondary-text ${selectedNav === "Subject" ? "activeNav" : ""}`}
        onClick={(e) => setSelectedNav(e.target.innerText)}
      >
        Subject
      </nav> */}
    </div>
  );
}
